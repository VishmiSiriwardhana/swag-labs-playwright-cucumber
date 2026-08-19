Feature: SauceDemo Login

  @smoke
  Scenario: Successful login with valid credentials
    Given the user is on the SauceDemo login page
    When the user logs in with valid credentials
    Then the inventory page should be displayed

  @negative
  @regression
  Scenario: Login fails with invalid credentials
    Given the user is on the SauceDemo login page
    When the user logs in with invalid credentials
    Then the login error message should be displayed

  @negative
  @regression
  Scenario: Locked out user cannot login
    Given the user is on the SauceDemo login page
    When the user logs in with locked user credentials
    Then the locked user error message should be displayed