Feature: Submit question
    As a user I would like to ask a question in order to initiate a response

    @wip
    Scenario: submission
        Given I visit the ask question page
        And I fill in the message field
        And I click submit
        Then I should see a confirmation of submission

    Scenario: no message submission
        Given I visit the ask a question page
        And I click submit
        Then I should see an error
