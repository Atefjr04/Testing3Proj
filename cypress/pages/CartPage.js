class CartPage {
  visit()             { cy.visit("/checkout", { failOnStatusCode: false }); }
  getItems()          { return cy.get('.cart-item'); }
  removeFirst()       { cy.get('.btn-danger').first().click(); }
  getCartCount()      { return cy.get('.nav-link .badge'); }
  getTotal()          { return cy.get('.cart-total'); }
  proceed()           { cy.get('[data-test="proceed-1"]').click(); }
  changeQuantity(qty) { cy.get('input[type="number"]').first().clear().type(qty); }
}
module.exports = new CartPage();