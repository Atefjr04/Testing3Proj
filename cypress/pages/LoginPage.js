class LoginPage {
  visit()           { cy.visit("/auth/login"); }
  enterEmail(email) { cy.get('[data-test="email"]').type(email); }
  enterPassword(pw) { cy.get('[data-test="password"]').type(pw); }
  submit()          { cy.get('[data-test="login-submit"]').click(); }
  getError()        { return cy.get('.alert-danger'); }
}
module.exports = new LoginPage();