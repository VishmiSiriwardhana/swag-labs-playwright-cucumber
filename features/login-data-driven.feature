Feature: Data Driven Login Validation

  @data-driven
  Scenario Outline: Validate login with different credentials
    Given the user is on the SauceDemo login page
    When the user logs in with "<username>" and "<password>"
    Then the login result should be "<result>"

    Examples:
      | username        | password      | result  |
      | standard_user   | secret_sauce  | success |
      | invalid_user    | wrong_password | error   |
      | locked_out_user | secret_sauce   | locked  |