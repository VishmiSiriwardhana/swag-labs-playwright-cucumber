Feature: Product Inventory

@smoke
Scenario: Add a product to the shopping cart
    Given the user is logged in
    When the user adds "Sauce Labs Backpack" to the cart
    Then the cart should contain 1 item

@regression
Scenario: Sort products by price from low to high
    Given the user is logged in
    When the user sorts products by "Price (low to high)"
    Then the products should be sorted by price in ascending order

@regression
Scenario Outline: Sort products using different sorting options
    Given the user is logged in
    When the user sorts products by "<sortOption>"
    Then the products should be sorted by "<sortType>"

    Examples:
      | sortOption           | sortType          |
      | Name (A to Z)        | name ascending    |
      | Name (Z to A)        | name descending   |
      | Price (low to high)  | price ascending   |
      | Price (high to low)  | price descending  |   

@regression
Scenario: View product details
    Given the user is logged in
    When the user opens the "Sauce Labs Backpack" product
    Then the product details page should be displayed
    And the product name should be "Sauce Labs Backpack"
    And the product description should be "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
    And the product price should be "$29.99"