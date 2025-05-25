Feature: Fill in checkout information

    Scenario: Successfull fill in checkout with valid data
    Given I have been login to saucedemo and select some items to cart
    When I click Checkout button
    And I fill the First Name data at First Name field
    And I fill the Last Name data at Last Name field
    And I fill the Postal Code data at Postal field
    And I click Continue button
    Then The System should be display the checkout overview information

    Scenario: Failed fill in checkout with empty data
    Given I have been login to saucedemo and select some items to cart
    When I click Checkout button
    And I click Continue button
    Then The System should be display error message in each field