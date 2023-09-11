Feature: Dropdown

    @alerts
    Scenario Outline: Demo Dropdown
        Given A web page -<webPage>- is opened
        When Perform alert handling actions

        Examples:
            | TestID     | webPage           |
            | DEMO-TC004 | javascript_alerts |