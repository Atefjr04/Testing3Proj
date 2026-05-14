class RegisterPage {
  visit()              { cy.visit("/auth/register", { failOnStatusCode: false }); }
  enterFirstName(name) { cy.get('#first_name').type(name); }
  enterLastName(name)  { cy.get('#last_name').type(name); }
  enterEmail(email)    { cy.get('#email').type(email); }
  enterPassword(pw)    { cy.get('#password').type(pw); }
  submit()             { cy.get('[data-test="register-submit"]').click(); }
  getError()           { return cy.get('.alert-danger'); }
}
module.exports = new RegisterPage();