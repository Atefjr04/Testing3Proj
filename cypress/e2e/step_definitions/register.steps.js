const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const RegisterPage = require("../../pages/RegisterPage");

Given("the user is on the register page", () => {
  RegisterPage.visit();
});

When("they fill in all valid registration details", () => {
  RegisterPage.enterFirstName("John");
  RegisterPage.enterLastName("Doe");
  RegisterPage.enterEmail("newuser" + Date.now() + "@example.com");
  RegisterPage.enterPassword("Test@12345");
  RegisterPage.submit();
});

When("they register with an already used email", () => {
  RegisterPage.enterFirstName("John");
  RegisterPage.enterLastName("Doe");
  RegisterPage.enterEmail("customer@practicesoftwaretesting.com");
  RegisterPage.enterPassword("Test@12345");
  RegisterPage.submit();
});

Then("they should be registered and redirected", () => {
  cy.url().should("include", "/auth/login");
});

Then("a duplicate email error should appear", () => {
  RegisterPage.getError().should("be.visible");
});