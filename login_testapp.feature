Feature: Login
  @login
    Scenario Outline: As a user , I can get <status> when login
        Given I am on the home page #login
        When I input email with <email> #login
            And I input password field with <password> #login
            And I tap login button #login
        Then I should see <result> wording #login

    Examples:
     | status             | email                 | password | result     |
     | invalid email      | testinvalid           | 1111     | invalid    |
     | success            | testsuccess@gmail.com | 2222     | success    |
     | wrong account      | testsuccess@gmail.com | 0000     | failed     |