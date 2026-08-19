# Swag Labs Automation Testing

Automated end-to-end testing framework for the **Swag Labs** application using **Playwright, TypeScript, Cucumber BDD, and Page Object Model (POM)**.

The framework is designed to demonstrate maintainable and scalable UI automation practices, reusable page objects, BDD scenarios, test data management, tagging, reporting, and failure screenshot capture.

## 🚀 Tech Stack

- **Language:** TypeScript
- **Automation Tool:** Playwright
- **BDD Framework:** Cucumber
- **Test Runner:** Cucumber
- **Design Pattern:** Page Object Model (POM)
- **Test Data:** JSON
- **Package Manager:** npm
- **Runtime:** Node.js
- **Version Control:** Git / GitHub

## 📁 Project Structure

```text
Swag Labs/
│
├── features/
│   ├── cart.feature
│   ├── checkout.feature
│   ├── inventory.feature
│   ├── login.feature
│   └── login-data-driven.feature
│
├── src/
│   ├── data/
│   │   ├── users.json
│   │   └── checkoutData.json
│   │
│   ├── fixtures/
│   │   └── .gitkeep
│   │
│   ├── hooks/
│   │   └── hooks.ts
│   │
│   ├── pages/
│   │   ├── BasePage.ts
│   │   ├── CartPage.ts
│   │   ├── CheckoutOverviewPage.ts
│   │   ├── CheckoutPage.ts
│   │   ├── InventoryPage.ts
│   │   ├── LoginPage.ts
│   │   ├── OrderConfirmationPage.ts
│   │   └── ProductDetailsPage.ts
│   │
│   ├── step-definitions/
│   │   ├── login.steps.ts
│   │   ├── inventory.steps.ts
│   │   ├── cart.steps.ts
│   │   └── checkout.steps.ts
│   │
│   ├── support/
│   │   └── world.ts
│   │
│   └── utils/
│       └── config.ts
│
├── reports/
│   └── .gitkeep
│
├── screenshots/
│   └── .gitkeep
│
├── .gitignore
├── cucumber.js
├── package.json
├── package-lock.json
├── playwright.config.ts
└── tsconfig.json

```

## 🧪 Test Coverage

The framework currently covers the following areas:

### Login

- Valid user login
- Locked-out user validation
- Invalid login credentials
- Data-driven login testing

### Inventory

- Add products to cart
- Product sorting
- Product details validation
- Multiple product selection

### Shopping Cart

- View added products
- Verify cart item count
- Remove products
- Verify products in cart
- Proceed to checkout

### Checkout

- Checkout page validation
- Customer information entry
- Required field validation
- Checkout overview validation
- Order total validation
- Complete product purchase
- Order confirmation

## 🏷️ Test Tags

Cucumber tags are used to categorize tests.

### Smoke Tests

```bash
npm run test:smoke

```

Runs scenarios tagged with:

```text
@smoke

```

### Regression Tests

```bash
npm run test:regression

```

Runs scenarios tagged with:

```text
@regression

```

### End-to-End Tests

```bash
npm run test:e2e

```

Runs scenarios tagged with:

```text
@e2e

```

### Negative Tests

```bash
npm run test:negative

```

Runs scenarios tagged with:

```text
@negative

```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-github-repository-url>

```

### 2. Navigate to the project

```bash
cd "Swag Labs"

```

### 3. Install dependencies

```bash
npm install

```

### 4. Install Playwright browsers

```bash
npx playwright install

```

## ▶️ Running Tests

### Run the complete test suite

```bash
npm test

```

### Run smoke tests

```bash
npm run test:smoke

```

### Run regression tests

```bash
npm run test:regression

```

### Run end-to-end tests

```bash
npm run test:e2e

```

### Run negative tests

```bash
npm run test:negative

```

## 📊 Test Results

The current test suite contains:

```text
22 scenarios
146 steps

```

Latest execution results:

```text
22 scenarios (22 passed)
146 steps (146 passed)

```

### Tagged Test Results


| Test Suite | Scenarios | Status   |
| ---------- | --------- | -------- |
| Smoke      | 2         | ✅ Passed |
| Regression | 13        | ✅ Passed |
| E2E        | 2         | ✅ Passed |
| Negative   | 4         | ✅ Passed |
| Full Suite | 22        | ✅ Passed |


## 📄 HTML Report

Cucumber generates an HTML report after test execution.

The report is generated at:

```text
reports/cucumber-report.html

```

The `reports` directory is excluded from Git tracking because reports are generated automatically during test execution.

## 📸 Failure Screenshots

The framework automatically captures screenshots when a scenario fails.

Screenshots are stored under:

```text
screenshots/

```

The screenshot is also attached to the Cucumber scenario result.

## 🏗️ Framework Design

### Page Object Model

Each major application page has its own Page Object class.

For example:

```text
LoginPage
InventoryPage
CartPage
CheckoutPage
CheckoutOverviewPage
OrderConfirmationPage
ProductDetailsPage

```

This keeps locators and page-specific actions separate from the test steps and makes the framework easier to maintain.

### Base Page

`BasePage.ts` provides reusable methods such as:

- Click
- Fill
- Get text
- Wait for visibility
- Wait for URL

Page Objects extend the base page to reuse these common actions.

### Custom World

Cucumber's custom `World` is used to share:

- Browser
- Browser context
- Page
- Page Objects

between step definitions within a scenario.

### Hooks

Cucumber hooks handle:

- Browser initialization
- Browser context creation
- Page creation
- Page Object initialization
- Failure screenshots
- Browser cleanup

## 🗃️ Test Data Management

Test data is separated from the step definitions using JSON files.

### User Data

```text
src/data/users.json

```

Contains login credentials for different user types.

### Checkout Data

```text
src/data/checkoutData.json

```

Contains customer information used by checkout scenarios.

This approach keeps test data separate from test logic and makes it easier to add additional test data.

## 🔄 BDD Approach

The framework uses Cucumber's Gherkin syntax to describe application behavior in a readable format.

Example:

```gherkin
Scenario: Add a product to the shopping cart
    Given the user is logged in
    When the user adds "Sauce Labs Backpack" to the cart
    Then the cart should contain 1 item

```

This allows technical and non-technical stakeholders to understand the expected behavior of the application.

## 🧩 Framework Components


| Component         | Purpose                        |
| ----------------- | ------------------------------ |
| Playwright        | Browser automation             |
| TypeScript        | Programming language           |
| Cucumber          | BDD and test execution         |
| Gherkin           | Behavior specifications        |
| Page Object Model | Maintainable page interactions |
| JSON              | Test data management           |
| Hooks             | Test lifecycle management      |
| Custom World      | Shared Cucumber context        |
| npm scripts       | Test suite execution           |
| HTML Reporter     | Test reporting                 |


## 🔍 Quality Practices Demonstrated

- Page Object Model
- Reusable base page methods
- Separation of test logic and test data
- BDD/Gherkin scenarios
- Scenario tagging
- Data-driven testing
- Positive and negative testing
- End-to-end testing
- Failure screenshot capture
- TypeScript strict mode
- Reusable Cucumber hooks
- Organized step definitions
- HTML test reporting

## 👩‍💻 Author

**Vishmi Siriwardhana**

Associate QA Engineer

Technologies demonstrated in this project:

**Playwright | TypeScript | Cucumber | BDD | Page Object Model | Automation Testing**

