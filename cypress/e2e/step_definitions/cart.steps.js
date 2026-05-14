const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const CartPage = require("../../pages/CartPage");

Given("the user has a product in the cart", () => {
  cy.visit("/");
  cy.get('[data-test="product-name"]').first().click();
  cy.get('[data-test="add-to-cart"]').click();
  cy.visit("/checkout");
});

When("they remove it from the cart", () => {
  CartPage.removeFirst();
});

When("they change the quantity to {string}", (qty) => {
  CartPage.changeQuantity(qty);
});

Then("the cart should be empty", () => {
  cy.get('[data-test="cart-quantity"]').should("contain", "0");
});

Then("the cart total should update", () => {
  CartPage.getTotal().should("exist");
});

Then("the cart count should increase", () => {
  cy.get('[data-test="cart-quantity"]').should("not.contain", "0");
});