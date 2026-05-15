Cypress.Commands.add("login", () => {
  cy.visit("/auth/login", { failOnStatusCode: false });
  cy.wait(2000);
  cy.get('[data-test="email"]').should('be.visible').type("customer@practicesoftwaretesting.com");
  cy.get('[data-test="password"]').type("welcome01");
  cy.get('[data-test="login-submit"]').click();
  cy.wait(2000);
});

Cypress.Commands.add("addProductToCart", () => {
  cy.visit("/", { failOnStatusCode: false });
  cy.wait(3000);
  cy.get('.card-title').first().click();
  cy.wait(2000);
  cy.get('[data-test="add-to-cart"]').should('be.visible').click();
});