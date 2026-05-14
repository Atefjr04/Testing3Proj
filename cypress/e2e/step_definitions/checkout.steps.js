const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("the user is logged in with items in cart", () => {
  cy.login();
  cy.visit("/");
  cy.get('[data-test="product-name"]').first().click();
  cy.get('[data-test="add-to-cart"]').click();
});

When("they proceed to checkout", () => {
  cy.visit("/checkout");
  cy.get('[data-test="proceed-1"]').click();
});

Then("the checkout page should load", () => {
  cy.url().should("include", "/checkout");
});

Given("the user is on the contact page", () => {
  cy.visit("/contact");
});

When("they fill and submit the contact form", () => {
  cy.get('[data-test="first-name"]').type("John");
  cy.get('[data-test="last-name"]').type("Doe");
  cy.get('[data-test="email"]').type("john@example.com");
  cy.get('[data-test="message"]').type("This is a test message for contact form.");
  cy.get('[data-test="contact-submit"]').click();
});

Then("a contact success message should appear", () => {
  cy.get('[data-test="contact-success"]').should("be.visible");
});