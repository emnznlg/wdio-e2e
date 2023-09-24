Feature: Dropdown

    @dropdown @demo
    Scenario Outline: Demo Dropdown
        Given A web page -<webPage>- is opened
        When Choose an element -<element>- from dropdown

        Examples:
            | TestID     | webPage  | element  |
            | DEMO-TC003 | dropdown | Option 1 |