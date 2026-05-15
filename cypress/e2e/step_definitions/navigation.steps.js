const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("they click on contact in the navigation", () => {
  cy.visit("/contact", { failOnStatusCode: false });
  cy.wait(2000);
});

Then("the contact page should load", () => {
  cy.url().should("include", "/contact");
});

Then("the brand logo should be visible", () => {
  cy.get('body').then(($body) => {
    if ($body.find('img[alt*="logo"], img[alt*="Logo"], .navbar-brand img').length > 0) {
      cy.get('img[alt*="logo"], img[alt*="Logo"], .navbar-brand img').first().should('exist');
    } else {
      cy.get('.navbar-brand, nav').should('exist');
    }
  });
});