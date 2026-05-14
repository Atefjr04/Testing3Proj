class RegisterPage {
  visit()              { cy.visit("/auth/register", { failOnStatusCode: false }); }
  enterFirstName(name) { cy.get('[data-test="first-name"]').type(name); }
  enterLastName(name)  { cy.get('[data-test="last-name"]').type(name); }
  enterEmail(email)    { cy.get('[data-test="email"]').type(email); }
  enterPassword(pw)    { cy.get('[data-test="password"]').type(pw); }
  submit()             { cy.get('[data-test="register-submit"]').click(); }
  getError()           { return cy.get('.alert-danger'); }
}
module.exports = new RegisterPage();