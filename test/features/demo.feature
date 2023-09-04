Feature: Demo Feature

    @demo
    Scenario Outline: Run first demo feature
        Given User opens the Google page
        When User searches with <SearchItem>
        When User clicks on the first search result
        Then User verifies that the URL matches with the <ExpectedURL>

        Examples:
            | TestID     | SearchItem | ExpectedURL           |
            | DEMO-TC001 | WDIO       | https://webdriver.io/ |