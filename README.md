
**Microsoft Playwright Framework using javascript**

BDD and Mocha Automation Framework built with Microsoft Playwright tool using javascript bindings.

This project automates an end-to-end flow and captures the screenshots for failure.

I have integrated the Mocha and Cucumber framework to design and execute test scenarios.

**Pre Requisites**

Download and Install Node.js

Download and Install Visual Studio.

Clone this repository into your local system.

git clone <repo name>

Open the folder in Visual Studio and Load dependencies.

npm i -D @playwright/test allure-playwright

npm install @cucumber/cucumber

**How to Run Cucumber test**

Cucumber tests are written as part of the feature folder.

Open Terminal and run : npx cucumber-js --tags "@profile_submission" --exit

**How to Run using Mocha command**

Tests are written as part of the test folder.

npx playwright test --reporter=line,allure-playwright

allure generate ./allure-results --clean

allure open ./allure-report


**Built Using**

Node.js

Playwright

Cucumber

Mocha












 

	

