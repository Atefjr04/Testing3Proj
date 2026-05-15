const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const RegisterPage = require("../../pages/RegisterPage");

Given("the user is on the register page", () => {
  RegisterPage.visit();
});

When("they fill in all valid registration details", () => {
  RegisterPage.enterFirstName("John");
  RegisterPage.enterLastName("Doe");
  RegisterPage.enterDOB();
  RegisterPage.enterPhone();
  RegisterPage.enterAddress();
  RegisterPage.enterCity();
  RegisterPage.enterState();
  RegisterPage.enterCountry();
  RegisterPage.enterPostcode();
  RegisterPage.enterEmail("newuser" + Date.now() + "@example.com");
  RegisterPage.enterPassword("Test@12345");
  RegisterPage.submit();
  cy.wait(3000);
});

When("they register with an already used email", () => {
  RegisterPage.enterFirstName("John");
  RegisterPage.enterLastName("Doe");
  RegisterPage.enterEmail("customer@practicesoftwaretesting.com");
  RegisterPage.enterPassword("Test@12345");
  RegisterPage.submit();
  cy.wait(3000);
});

Then("they should be registered and redirected", () => {
  // Site may redirect to login OR show success message
  cy.url().then((url) => {
    if (url.includes('/auth/login')) {
      cy.url().should('include', '/auth/login');
    } else {
      // Check for success message instead
      cy.get('.alert-success, .toast-success, [class*="success"]')
        .should('exist');
    }
  });
});

Then("a duplicate email error should appear", () => {
  cy.get('.alert-danger, [class*="error"], [class*="danger"]')
    .should('be.visible');
});