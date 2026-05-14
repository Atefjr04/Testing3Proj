class ProductPage {
  visit()           { cy.visit("/"); }
  search(term)      {
    cy.get('[data-test="search-query"]').type(term);
    cy.get('[data-test="search-submit"]').click();
  }
  getProducts()     { return cy.get('[data-test="product-name"]'); }
  openFirst()       { cy.get('[data-test="product-name"]').first().click(); }
  addToCart()       { cy.get('[data-test="add-to-cart"]').click(); }
  filterCategory(cat) {
    cy.contains(cat).click();
  }
}
module.exports = new ProductPage();