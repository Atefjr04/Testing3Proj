class CartPage {
  visit() {
    cy.visit("/checkout", { failOnStatusCode: false });
    cy.wait(2000);
  }
  getItems()           { return cy.get('[data-test="cart-item"]'); }
  removeFirst()        { cy.get('[data-test="delete-product"]').first().click(); }
  getCartCount()       { return cy.get('[data-test="cart-quantity"]'); }
  getTotal()           { return cy.get('[data-test="cart-total"]'); }
  proceed()            { cy.get('[data-test="proceed-1"]').click(); }
  changeQuantity(qty)  { cy.get('[data-test="product-quantity"]').first().clear().type(qty); }
}
module.exports = new CartPage();