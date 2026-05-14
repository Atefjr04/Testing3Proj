Feature: User Registration

  Scenario: Successful registration
    Given the user is on the register page
    When they fill in all valid registration details
    Then they should be registered and redirected

  Scenario: Register with existing email
    Given the user is on the register page
    When they register with an already used email
    Then a duplicate email error should appear