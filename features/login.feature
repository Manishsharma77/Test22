Feature: Login functionality

  Scenario: Valid login
    Given I open the application
    When I enter valid username "testuser"
    And I enter valid password "123456"
    And I click on login button
    Then I should see the dashboard page
