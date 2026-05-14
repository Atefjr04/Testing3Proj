class ProductPage {
  visit()             { cy.visit("/", { failOnStatusCode: false }); }
  search(term)        {
    cy.get('#search').type(term);
    cy.get('[data-test="search-submit"]').click();
  }
  getProducts()       { return cy.get('.card-title'); }
  openFirst()         { cy.get('.card-title').first().click(); }
  addToCart()         { cy.get('[data-test="add-to-cart"]').click(); }
  filterCategory(cat) {
    cy.get('.category-name').contains(cat).click();
  }
}
module.exports = new ProductPage();