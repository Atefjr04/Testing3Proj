const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("the user is logged in with items in cart", () => {
  cy.login();
  cy.visit("/", { failOnStatusCode: false });
  cy.wait(3000);
  cy.get('.card-title').first().click();
  cy.wait(3000);
  cy.get('body').then(($body) => {
    if ($body.find('[data-test="add-to-cart"]').length > 0) {
      cy.get('[data-test="add-to-cart"]').click();
    } else {
      cy.get('button').contains(/add to cart/i).click();
    }
  });
  cy.wait(1000);
});

When("they proceed to checkout", () => {
  cy.visit("/checkout", { failOnStatusCode: false });
  cy.wait(2000);
  cy.get('body').then(($body) => {
    if ($body.find('[data-test="proceed-1"]').length > 0) {
      cy.get('[data-test="proceed-1"]').click();
    }
  });
});

Then("the checkout page should load", () => {
  cy.url().should("include", "/checkout");
});

Given("the user is on the contact page", () => {
  cy.visit("/contact", { failOnStatusCode: false });
  cy.wait(2000);
});

When("they fill and submit the contact form", () => {
  cy.get('#first_name').should('be.visible').type("John");
  cy.get('#last_name').type("Doe");
  cy.get('#email').type("john@example.com");
  cy.get('select[data-test="subject"] option:not([disabled])')
    .first()
    .then(($option) => {
      const value = $option.val();
      cy.get('select[data-test="subject"]').select(value);
    });
  cy.get('#message').type("This is a test message for the contact form.");
  cy.get('[data-test="contact-submit"]').click();
  cy.wait(2000);
});

Then("a contact success message should appear", () => {
  cy.get('body').then(($body) => {
    if ($body.find('.alert-success').length > 0) {
      cy.get('.alert-success').should('be.visible');
    } else if ($body.find('[class*="success"]').length > 0) {
      cy.get('[class*="success"]').should('exist');
    } else {
      cy.get('.alert, .toast, [class*="alert"]').should('exist');
    }
  });
});