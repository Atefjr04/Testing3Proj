Feature: User Login

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When they enter valid credentials
    Then they should be redirected to the account page

  Scenario: Login with wrong password
    Given the user is on the login page
    When they enter a wrong password
    Then a login error message should appear

  Scenario: Login with empty fields
    Given the user is on the login page
    When they submit the form without credentials
    Then login validation errors should be shown