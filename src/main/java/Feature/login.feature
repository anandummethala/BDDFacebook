Feature: Facebook Login Feature

Scenario Outline: Facebook Login Scenario

Given user is already on the LoginPage
Then user logins into the Application with <username> and <password>
Then user is on home page
Then Close the browser

Examples:
        |username|password|
        |anandummethala@yahoo.com|gitmech|