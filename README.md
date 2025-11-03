Cypress Automation Framework (JavaScript)

A robust end-to-end automation framework built with Cypress using Page Object Model (POM) architecture for scalable, maintainable UI and API test automation.

🚀 Features

Cypress with JavaScript

Page Object Model (POM) design pattern

Reusable custom commands & utilities

Environment & config-driven execution

API + UI test automation support

Detailed HTML reporting

Screenshots & video recording for failures

CI/CD ready (Jenkins/GitHub Actions/Azure DevOps)

🏗️ Installation
npm install

▶️ Run Tests

Run UI Tests

npx cypress open

Headless Execution
npx cypress run

🧾 Reporting

Mochawesome / Allure integrated

Screenshots & videos auto‑generated on failure

Generate Report (if using Mochawesome)
npm run generate-report

🌐 Environment Handling

Support for multiple environments via config files or CLI

npx cypress run --env environment=qa

🔐 CI/CD Integration

Framework supports pipelines in:

Jenkins

GitHub Actions

GitLab CI

Azure DevOps

Sample command for CI:

npm install && npx cypress run



Store test data in fixtures

Use custom commands to avoid redundancy
