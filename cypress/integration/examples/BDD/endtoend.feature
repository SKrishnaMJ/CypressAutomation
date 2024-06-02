Feature: Tests the entire working of an ecommerce website

    End-to-End Testing
    Scenario: Validate the functionality of an ecommerce site
    Given An ecommerce website
    When We add different items to the cart
    And We validate if the total prices match and click checkout
    Then We select a country and click submit and validate if Success

    @Smoke
    Scenario: Fill in the form details and validate its attributes
    Given An ecommerce website
    When I fill the form details
    | name | gender |
    | Riti | Female |
    Then I validate a certain functionality
    And Now I open the shop page