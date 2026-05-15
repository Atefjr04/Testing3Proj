Feature: Site Navigation

  Scenario: User can navigate to contact page
    Given the user visits the homepage
    When they click on contact in the navigation
    Then the contact page should load

  Scenario: Page shows brand logo
    Given the user visits the homepage
    Then the brand logo should be visible