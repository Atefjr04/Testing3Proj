Feature: Checkout and Contact

  Scenario: Proceed to checkout
    Given the user is logged in with items in cart
    When they proceed to checkout
    Then the checkout page should load

  Scenario: Submit contact form
    Given the user is on the contact page
    When they fill and submit the contact form
    Then a contact success message should appear 