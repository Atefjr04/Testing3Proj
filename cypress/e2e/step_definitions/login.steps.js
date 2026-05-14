const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const LoginPage = require("../../pages/LoginPage");
const user = require("../../../cypress/fixtures/user.json");

Given("the user is on the login page", () => {
  LoginPage.visit();
});

When("they enter valid credentials", () => {
  LoginPage.enterEmail(user.validEmail);
  LoginPage.enterPassword(user.validPassword);
  LoginPage.submit();
});

When("they enter a wrong password", () => {
  LoginPage.enterEmail(user.validEmail);
  LoginPage.enterPassword(user.wrongPassword);
  LoginPage.submit();
});

When("they submit the form without credentials", () => {
  LoginPage.submit();
});

Then("they should be redirected to the account page", () => {
  cy.url().should("include", "/account");
});

Then("a login error message should appear", () => {
  LoginPage.getError().should("be.visible");
});

Then("login validation errors should be shown", () => {
  LoginPage.getError().should("be.visible");
});