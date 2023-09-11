Feature: SauceDemo

    @sauceDemo
    Scenario Outline: Demo SauceDemo
        Given Login to inventory web app
        Then Inventory page should list <numberOfProducts>
        Then Validate all products have a valid price

        Examples:
            | TestID     | numberOfProducts |
            | SAUCE_TC01 | 6                |