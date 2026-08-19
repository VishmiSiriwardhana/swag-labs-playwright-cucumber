# Swag Labs – Playwright + TypeScript + Cucumber Automation Framework

## 📌 Project Overview

This project is an end-to-end test automation framework developed for the **Swag Labs** web application using **Playwright, TypeScript, and Cucumber BDD**.

The framework follows the **Page Object Model (POM)** design pattern and includes reusable page classes, Cucumber step definitions, test data management, hooks, reporting, and GitHub Actions CI/CD integration.

The project demonstrates practical automation testing concepts including functional testing, negative testing, data-driven testing, tagging, reusable components, and continuous integration.

---

## 🛠️ Technology Stack


| Technology     | Purpose                         |
| -------------- | ------------------------------- |
| Playwright     | Browser automation              |
| TypeScript     | Programming language            |
| Cucumber       | BDD test framework              |
| Gherkin        | Feature and scenario definition |
| Node.js        | Runtime environment             |
| npm            | Dependency management           |
| Git            | Version control                 |
| GitHub         | Source code repository          |
| GitHub Actions | CI/CD automation                |


---

## 🏗️ Framework Architecture

The framework follows the **Page Object Model (POM)** architecture.

```text
Feature Files
     ↓
Step Definitions
     ↓
Page Objects
     ↓
Playwright
     ↓
Swag Labs Application

```

### Main Components

- **Feature Files** – Define test scenarios using Gherkin syntax.
- **Step Definitions** – Connect Gherkin steps with automation code.
- **Page Objects** – Encapsulate page locators and reusable actions.
- **Custom World** – Provides shared Playwright browser, page, and page-object instances.
- **Hooks** – Manage browser and test setup/cleanup.
- **Test Data** – Stores reusable login and checkout data.
- **Cucumber Configuration** – Controls test execution, reporting, and timeouts.
- **GitHub Actions** – Automatically executes the test suite in CI.

---

## 📂 Project Structure

```text
swag-labs-playwright-cucumber/
│
├── .github/
│   └── workflows/
│       └── ci.yml
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
│   │   ├── checkoutData.json
│   │   └── users.json
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
│   │   ├── cart.steps.ts
│   │   ├── checkout.steps.ts
│   │   ├── inventory.steps.ts
│   │   └── login.steps.ts
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
├── README.md
└── tsconfig.json

```

---

## 🧪 Test Coverage

The framework covers the following functional areas:

### 🔐 Login

- Valid user login
- Invalid login scenarios
- Locked-out user validation
- Data-driven login testing

### 🛒 Shopping Cart

- Add products to cart
- View products in cart
- Add multiple products
- Remove products from cart
- Verify cart item count

### 📦 Product Inventory

- Sort products by name
- Sort products by price
- Verify product details
- Verify product name
- Verify product description
- Verify product price

### 💳 Checkout

- Navigate to checkout
- Enter customer information
- Validate required fields
- Verify checkout overview
- Verify order total
- Complete successful purchase
- Verify order confirmation

---

## 🏷️ Test Tags

Cucumber tags are used to organize test execution.


| Tag           | Purpose                           |
| ------------- | --------------------------------- |
| `@smoke`      | Critical functionality            |
| `@regression` | Regression test suite             |
| `@e2e`        | End-to-end business flows         |
| `@negative`   | Negative and validation scenarios |


---

## ▶️ Installation

Clone the repository:

```bash
git clone https://github.com/VishmiSiriwardhana/swag-labs-playwright-cucumber.git

```

Navigate to the project:

```bash
cd swag-labs-playwright-cucumber

```

Install dependencies:

```bash
npm install

```

Install Playwright Chromium:

```bash
npx playwright install chromium

```

---

## 🚀 Running Tests

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

---

## 📊 Test Results

Current test execution results:


| Test Suite | Scenarios | Result   |
| ---------- | --------- | -------- |
| Smoke      | 2         | ✅ Passed |
| Regression | 13        | ✅ Passed |
| E2E        | 2         | ✅ Passed |
| Negative   | 4         | ✅ Passed |
| Full Suite | 22        | ✅ Passed |


**Full suite:** 22 scenarios and 146 steps passed successfully.

---

## 📄 Reporting

The framework generates an HTML Cucumber report after test execution.

The generated report is stored under:

```text
reports/cucumber-report.html

```

Generated reports are excluded from version control using `.gitignore`.

Failure screenshots are also generated and excluded from Git tracking.

---

## 🔄 Continuous Integration

GitHub Actions is configured to automatically execute the Cucumber test suite when changes are pushed to the `main` branch or when a pull request is created.

### CI Pipeline

```text
Code Push / Pull Request
          ↓
   Checkout Repository
          ↓
      Node.js 24
          ↓
     npm ci
          ↓
 Install Playwright Chromium
          ↓
     npm test
          ↓
   Cucumber Test Results

```

The CI pipeline helps ensure that new changes do not introduce regressions.

---

## 🎯 Framework Features

- ✅ Playwright browser automation
- ✅ TypeScript
- ✅ Cucumber BDD
- ✅ Gherkin feature files
- ✅ Page Object Model
- ✅ Reusable Base Page
- ✅ Custom Cucumber World
- ✅ Cucumber Hooks
- ✅ Data-driven testing
- ✅ Positive and negative testing
- ✅ Cucumber tags
- ✅ HTML test reporting
- ✅ Failure screenshots
- ✅ Git version control
- ✅ GitHub repository
- ✅ GitHub Actions CI/CD

---

## 👩‍💻 Author

**Vishmi Siriwardhana**

Software Quality Assurance Engineer

This project was created as a demonstration of practical web automation testing, BDD, framework design, and CI/CD practices.

