const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("the user is logged in with items in cart", () => {
  cy.login();
  cy.visit("/", { failOnStatusCode: false });
  cy.get('.card-title').first().click();
  cy.get('[data-test="add-to-cart"]').click();
});

When("they proceed to checkout", () => {
  cy.visit("/checkout", { failOnStatusCode: false });
  cy.get('[data-test="proceed-1"]').click();
});

Then("the checkout page should load", () => {
  cy.url().should("include", "/checkout");
});

Given("the user is on the contact page", () => {
  cy.visit("/contact", { failOnStatusCode: false });
});

When("they fill and submit the contact form", () => {
  cy.get('#first_name').type("John");
  cy.get('#last_name').type("Doe");
  cy.get('#email').type("john@example.com");
  cy.get('#message').type("This is a test message.");
  cy.get('[data-test="contact-submit"]').click();
});

Then("a contact success message should appear", () => {
  cy.get('.alert-success').should("be.visible");
});