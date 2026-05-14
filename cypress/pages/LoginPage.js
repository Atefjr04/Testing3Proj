class LoginPage {
  visit() {
    cy.visit("/auth/login", { failOnStatusCode: false });
    cy.wait(2000);
  }
  enterEmail(email)  { cy.get('[data-test="email"]').should('be.visible').type(email); }
  enterPassword(pw)  { cy.get('[data-test="password"]').should('be.visible').type(pw); }
  submit()           { cy.get('[data-test="login-submit"]').should('be.visible').click(); }
  getError()         { return cy.get('.alert-danger'); }
}
module.exports = new LoginPage();