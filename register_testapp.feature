Feature: Register
  @register
    Scenario Outline: As a user , I can get <status> when registered
        Given I am on the home page #register
        When I tap on create account link #register
            And I input name with <name> #register
            And I input email with <email> #register
            And I input password with <password> #register
            And I input password confirmation with <confirmpassword> #register
            And I tap register button #register
        Then I should see <result> wording #register

    Examples:
     | name     | status             | email                 | password | confirmpassword   | result         |
     | test01   | invalid email      | testinvalid           | 1111     | 1111              | invalid        |
     | test02   | success            | testsuccess@gmail.com | 2222     | 2222              | success        |
     | test03   | password not match | notmatch@gmail.com    | 0000     | 1111              | not match      |
     |          | incorrect name     | notmatch@gmail.com    | 0000     | 1111              | no name        |
     | test02   | email exist        | testsuccess@gmail.com | 2222     | 2222              | email exist    |