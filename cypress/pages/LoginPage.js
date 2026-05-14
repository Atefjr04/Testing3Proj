class LoginPage {
  visit()           { cy.visit("/auth/login", { failOnStatusCode: false }); }
  enterEmail(email) { cy.get('#email').type(email); }
  enterPassword(pw) { cy.get('#password').type(pw); }
  submit()          { cy.get('[data-test="login-submit"]').click(); }
  getError()        { return cy.get('.alert-danger'); }
}
module.exports = new LoginPage();