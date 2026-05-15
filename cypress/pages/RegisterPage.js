class RegisterPage {
  visit() {
    cy.visit("/auth/register", { failOnStatusCode: false });
    cy.wait(2000);
  }
  enterFirstName(name) { 
    cy.get('[data-test="first-name"]').should('be.visible').clear().type(name); 
  }
  enterLastName(name)  { 
    cy.get('[data-test="last-name"]').should('be.visible').clear().type(name); 
  }
  enterEmail(email)    { 
    cy.get('[data-test="email"]').should('be.visible').clear().type(email); 
  }
  enterPassword(pw)    { 
    cy.get('[data-test="password"]').should('be.visible').clear().type(pw); 
  }
  enterDOB()           { 
    cy.get('[data-test="dob"]').then($el => {
      if ($el.length) cy.wrap($el).type('1990-01-01');
    });
  }
  enterPhone()         {
    cy.get('[data-test="phone"]').then($el => {
      if ($el.length) cy.wrap($el).type('0123456789');
    });
  }
  enterAddress()       {
    cy.get('[data-test="address"]').then($el => {
      if ($el.length) cy.wrap($el).type('123 Test Street');
    });
  }
  enterCity()          {
    cy.get('[data-test="city"]').then($el => {
      if ($el.length) cy.wrap($el).type('Cairo');
    });
  }
  enterState()         {
    cy.get('[data-test="state"]').then($el => {
      if ($el.length) cy.wrap($el).type('Cairo');
    });
  }
  enterCountry()       {
    cy.get('[data-test="country"]').then($el => {
      if ($el.length) cy.wrap($el).type('EG');
    });
  }
  enterPostcode()      {
    cy.get('[data-test="postcode"]').then($el => {
      if ($el.length) cy.wrap($el).type('12345');
    });
  }
  submit()             { 
    cy.get('[data-test="register-submit"]').should('be.visible').click(); 
  }
  getError()           { return cy.get('.alert-danger'); }
}
module.exports = new RegisterPage();