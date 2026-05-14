Feature: Product Browsing

  Scenario: Homepage loads products
    Given the user visits the homepage
    Then products should be visible on the page

  Scenario: Search for a product
    Given the user visits the homepage
    When they search for "Pliers"
    Then search results should contain "Pliers"

  Scenario: Filter products by category
    Given the user visits the homepage
    When they filter by "Hand Tools"
    Then filtered products should be displayed