$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/eicj8za/eclipse-workspace/BDDFacebook/src/main/java/Feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Login Feature",
  "description": "",
  "id": "facebook-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Facebook Login Scenario",
  "description": "",
  "id": "facebook-login-feature;facebook-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on the LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user logins into the Application with \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "facebook-login-feature;facebook-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "facebook-login-feature;facebook-login-scenario;;1"
    },
    {
      "cells": [
        "anandummethala@yahoo.com",
        "gitmech"
      ],
      "line": 12,
      "id": "facebook-login-feature;facebook-login-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Facebook Login Scenario",
  "description": "",
  "id": "facebook-login-feature;facebook-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on the LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user logins into the Application with anandummethala@yahoo.com and gitmech",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_is_already_on_the_LoginPage()"
});
formatter.result({
  "duration": 255588500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_logins_into_the_Application_with_anandummethala_yahoo_com_and_gitmech()"
});
formatter.result({
  "duration": 37300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_home_page()"
});
formatter.result({
  "duration": 29100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.close_the_browser()"
});
formatter.result({
  "duration": 35300,
  "status": "passed"
});
});