class CartPage {
  visit()           { cy.visit("/checkout"); }
  getItems()        { return cy.get('.cart-item'); }
  removeFirst()     { cy.get('[data-test="remove-product"]').first().click(); }
  getCartCount()    { return cy.get('[data-test="cart-quantity"]'); }
  proceed()         { cy.get('[data-test="proceed-1"]').click(); }
  changeQuantity(qty) {
    cy.get('[data-test="product-quantity"]').first().clear().type(qty);
  }
}
module.exports = new CartPage();