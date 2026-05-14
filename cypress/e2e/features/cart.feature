Feature: Shopping Cart

  Scenario: View product details
    Given the user visits the homepage
    When they open the first product
    Then the product detail page should be shown

  Scenario: Add product to cart
    Given the user visits the homepage
    When they open the first product and add it to cart
    Then the cart count should increase

  Scenario: Remove product from cart
    Given the user has a product in the cart
    When they remove it from the cart
    Then the cart should be empty

  Scenario: Cart quantity updates
    Given the user has a product in the cart
    When they change the quantity to "2"
    Then the cart total should update