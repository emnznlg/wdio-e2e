Feature: Dropdown

    @windows
    Scenario Outline: Demo Dropdown
        Given A web page -<webPage>- is opened
        When Perform window handling actions

        Examples:
            | TestID     | webPage |
            | DEMO-TC004 | windows |