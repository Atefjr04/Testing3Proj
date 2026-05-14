Cypress.Commands.add("login", () => {
  cy.visit("/auth/login", { failOnStatusCode: false });
  cy.get('#email').type("customer@practicesoftwaretesting.com");
  cy.get('#password').type("welcome01");
  cy.get('[data-test="login-submit"]').click();
});

Cypress.Commands.add("addProductToCart", () => {
  cy.visit("/", { failOnStatusCode: false });
  cy.get('.card-title').first().click();
  cy.get('[data-test="add-to-cart"]').click();
});