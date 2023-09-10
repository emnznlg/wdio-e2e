Feature: Web Interactions

    @webInteractions
    Scenario Outline: Demo Web Interactions
        Given A web page is opened
        When Perform web interactions

        Examples:
            | TestID     |
            | DEMO-TC001 |