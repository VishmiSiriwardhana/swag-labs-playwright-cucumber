Feature: Product checkout

@regression
Scenario: Proceed to checkout with a product
    Given the user is logged in
    When the user adds "Sauce Labs Backpack" to the cart
    And the user opens the shopping cart
    And the user proceeds to checkout
    Then the checkout information page should be displayed

@regression
Scenario: Enter customer information during checkout
    Given the user is logged in
    When the user adds "Sauce Labs Backpack" to the cart
    And the user opens the shopping cart
    And the user proceeds to checkout
    When the user enters checkout information for "validCustomer"
    Then the checkout information should be accepted  

@e2e
Scenario: Complete a successful product purchase
    Given the user is logged in
    When the user adds "Sauce Labs Backpack" to the cart
    And the user opens the shopping cart
    And the user proceeds to checkout
    When the user enters checkout information for "validCustomer"
    Then the checkout information should be accepted
    And the user should complete the order
    Then the order confirmation should be displayed
    
@negative
Scenario: Checkout cannot continue without customer information
    Given the user is logged in
    When the user adds "Sauce Labs Backpack" to the cart
    And the user opens the shopping cart
    And the user proceeds to checkout
    When the user continues checkout without entering customer information
    Then the checkout error message should be displayed as "Error: First Name is required"

@negative
Scenario: Checkout requires last name
    Given the user is logged in
    When the user adds "Sauce Labs Backpack" to the cart
    And the user opens the shopping cart
    And the user proceeds to checkout
    When the user enters first name "John"
    And the user continues checkout
    Then the checkout error message should be displayed as "Error: Last Name is required"

@e2e
Scenario: Complete checkout with customer information
    Given the user is logged in
    When the user adds "Sauce Labs Backpack" to the cart
    And the user opens the shopping cart
    And the user proceeds to checkout
    When the user enters checkout information for "validCustomer"
    And the user continues checkout
    Then the checkout overview page should be displayed
    And the order total should be displayed

