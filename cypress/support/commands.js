Cypress.Commands.add("login", () => {
  cy.visit("/auth/login");
  cy.get('[data-test="email"]').type("customer@practicesoftwaretesting.com");
  cy.get('[data-test="password"]').type("welcome01");
  cy.get('[data-test="login-submit"]').click();
});

Cypress.Commands.add("addProductToCart", () => {
  cy.visit("/");
  cy.get('[data-test="product-name"]').first().click();
  cy.get('[data-test="add-to-cart"]').click();
});