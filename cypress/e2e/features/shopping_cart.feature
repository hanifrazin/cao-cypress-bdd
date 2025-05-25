Feature: Add items to Cart
    
    Scenario: Add 2 items to cart
        Given I have been login to Saucedemo Successful
        When I add Sauce Labs Backpack product to cart
        And I add Sauce Labs Bike Light product to cart
        And I click to cart icon
        Then The cart has contains 2 items