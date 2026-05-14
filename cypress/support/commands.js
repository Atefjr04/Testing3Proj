import user from '../fixtures/user.json'

Cypress.Commands.add("login", () => {
  cy.visit("/auth/login");
  cy.get('[data-test="email"]').type(user.validEmail);
  cy.get('[data-test="password"]').type(user.validPassword);
  cy.get('[data-test="login-submit"]').click();
});

Cypress.Commands.add("addProductToCart", () => {
  cy.visit("/");
  cy.get('[data-test="product-name"]').first().click();
  cy.get('[data-test="add-to-cart"]').click();
});