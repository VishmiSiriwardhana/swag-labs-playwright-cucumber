Feature: Shopping Cart

@regression
Scenario: View added product in the shopping cart
    Given the user is logged in
    When the user adds "Sauce Labs Backpack" to the cart
    And the user opens the shopping cart
    Then the shopping cart should display "Sauce Labs Backpack"

@regression
Scenario: Add multiple products to the shopping cart
    Given the user is logged in
    When the user adds "Sauce Labs Backpack" to the cart
    And the user adds "Sauce Labs Bike Light" to the cart
    And the user adds "Sauce Labs Bolt T-Shirt" to the cart
    Then the cart should contain 3 items
    When the user opens the shopping cart
    Then the following products should be in the cart
      | product                |
      | Sauce Labs Backpack    |
      | Sauce Labs Bike Light  |
      | Sauce Labs Bolt T-Shirt|  

@regression
Scenario: Remove a product from the shopping cart
    Given the user is logged in
    When the user adds "Sauce Labs Backpack" to the cart
    And the user adds "Sauce Labs Bike Light" to the cart
    When the user opens the shopping cart
    And the user removes "Sauce Labs Backpack" from the cart
    Then the cart should contain 1 item
    And the product "Sauce Labs Backpack" should not be in the cart
