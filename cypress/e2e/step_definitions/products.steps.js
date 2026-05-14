const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const ProductPage = require("../../pages/ProductPage");

Given("the user visits the homepage", () => {
  ProductPage.visit();
});

When("they search for {string}", (term) => {
  ProductPage.search(term);
});

When("they filter by {string}", (category) => {
  ProductPage.filterCategory(category);
});

When("they open the first product", () => {
  ProductPage.openFirst();
});

When("they open the first product and add it to cart", () => {
  ProductPage.openFirst();
  ProductPage.addToCart();
});

Then("products should be visible on the page", () => {
  ProductPage.getProducts().should("have.length.greaterThan", 0);
});

Then("search results should contain {string}", (term) => {
  ProductPage.getProducts().first().should("contain.text", term);
});

Then("filtered products should be displayed", () => {
  ProductPage.getProducts().should("have.length.greaterThan", 0);
});

Then("the product detail page should be shown", () => {
  cy.url().should("include", "/product");
});
