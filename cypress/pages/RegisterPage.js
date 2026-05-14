class RegisterPage {
  visit() {
    cy.visit("/auth/register", { failOnStatusCode: false });
    cy.wait(2000);
  }
  enterFirstName(name) { cy.get('[data-test="first-name"]').should('be.visible').type(name); }
  enterLastName(name)  { cy.get('[data-test="last-name"]').should('be.visible').type(name); }
  enterEmail(email)    { cy.get('[data-test="email"]').should('be.visible').type(email); }
  enterPassword(pw)    { cy.get('[data-test="password"]').should('be.visible').type(pw); }
  submit()             { cy.get('[data-test="register-submit"]').should('be.visible').click(); }
  getError()           { return cy.get('.alert-danger'); }
}
module.exports = new RegisterPage();