class ProductPage {
  visit() {
    cy.visit("/", { failOnStatusCode: false });
    cy.wait(3000);
  }
  search(term) {
    cy.get('[data-test="search-query"]').should('be.visible').type(term);
    cy.get('[data-test="search-submit"]').click();
    cy.wait(2000);
  }
  getProducts()        { return cy.get('[data-test="product-name"]'); }
  openFirst()          { cy.get('[data-test="product-name"]').first().click(); }
  addToCart()          { cy.get('[data-test="add-to-cart"]').click(); }
  filterCategory(cat)  {
    cy.get('[data-test="category"]').contains(cat).click();
    cy.wait(2000);
  }
}
module.exports = new ProductPage();