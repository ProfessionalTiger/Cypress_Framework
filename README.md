# Cypress YouTube Automation Testing Suite

A robust end-to-end testing automation framework for YouTube using Cypress. This project validates critical YouTube functionality through automated test cases covering search, content discovery, and video playback features.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Test Cases](#test-cases)
- [Dependencies](#dependencies)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This automation suite provides comprehensive end-to-end testing for YouTube's core functionality using Cypress 15.13.1. The framework is built to validate user interactions, search functionality, content loading, and video playback features with reliable and maintainable test cases.

**Version:** 1.0.0  
**Author:** Aamir Saleem  
**Type:** CommonJS

## ✨ Features

- ✅ **Search Functionality Testing** - Validates YouTube search and course discovery
- ✅ **Content Discovery** - Validates thumbnail loading and content rendering
- ✅ **Video Playback Testing** - Tests video playback on Shorts
- ✅ **Cross-browser Support** - Compatible with Chrome, Firefox, and Edge
- ✅ **Real Event Simulation** - Using cypress-real-events for authentic user interactions
- ✅ **Advanced Selectors** - XPath support for complex element selection
- ✅ **File Upload Capability** - Support for file upload testing
- ✅ **iFrame Handling** - Embedded content testing capabilities

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) - comes with Node.js
- **Git** (for version control)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd CypressWork
```

### 2. Install Dependencies

```bash
npm install
```

This will install:
- Cypress (v15.13.1)
- cypress-real-events
- cypress-xpath
- cypress-iframe
- cypress-file-upload
- string_decoder

## 📁 Project Structure

```
CypressWork/
├── cypress/
│   ├── e2e/
│   │   └── Youtube_TestCases.cy.js       # End-to-end test specifications
│   ├── fixtures/
│   │   └── example.json                  # Test data and fixtures
│   ├── screenshots/                       # Captured screenshots on failure
│   └── support/
│       ├── commands.js                   # Custom Cypress commands
│       └── e2e.js                        # E2E support configuration
├── cypress.config.js                     # Cypress configuration
├── package.json                          # Project dependencies
├── package-lock.json                     # Dependency lock file
├── .gitignore                            # Git ignore rules
└── README.md                             # This file
```

## ⚙️ Configuration

The Cypress configuration is defined in `cypress.config.js`:

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```

### Environment Variables
Environment variables are currently disabled (`allowCypressEnv: false`). To enable environment-specific configurations, update the configuration file accordingly.

## 🧪 Running Tests

### Run All Tests in Headless Mode
```bash
npx cypress run
```

### Open Cypress Test Runner (Interactive Mode)
```bash
npx cypress open
```

### Run Specific Test File
```bash
npx cypress run --spec "cypress/e2e/Youtube_TestCases.cy.js"
```

### Run Tests in Specific Browser
```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge
```

### Run Tests in Headless Mode with Specific Browser
```bash
npx cypress run --headless --browser chrome
```

## 📝 Test Cases

### YouTube Testing Suite

**File:** `cypress/e2e/Youtube_TestCases.cy.js`

#### TC_001: Search Cypress Courses and Play Video
- **Description:** Searches for "Cypress" on YouTube and plays the Cypress 2022 series course
- **Steps:**
  1. Navigate to YouTube
  2. Search for "cypress"
  3. Click on suggestion
  4. Select and play the Cypress tutorial video
- **Expected Result:** Video page loads with correct title

#### TC_002: Count Loaded Thumbnails
- **Description:** Validates that all content thumbnails are loaded correctly
- **Expected Result:** 47 thumbnails should be present on the page

#### TC_003: Load Shorts and Validate Video Playback
- **Description:** Navigates to YouTube Shorts and monitors video playback events
- **Expected Result:** Video element is detected and playback events are triggered

## 📚 Dependencies

### Production Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| cypress | ^15.13.1 | E2E testing framework |
| cypress-real-events | ^1.15.0 | Simulates real user events |
| string_decoder | ^1.3.0 | String decoding utility |

### Development Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| cypress-file-upload | ^5.0.8 | File upload testing |
| cypress-iframe | ^1.0.1 | iFrame content handling |
| cypress-xpath | ^2.0.1 | XPath selector support |

## 🛠️ Custom Commands

Custom Cypress commands can be defined in `cypress/support/commands.js` to extend Cypress functionality. This file can be used to create reusable commands for common actions.

### Example Custom Command Pattern:
```javascript
Cypress.Commands.add('customCommand', (selector, value) => {
  cy.get(selector).type(value);
});
```

## 📸 Screenshots and Artifacts

- **Screenshots:** Automatically captured in `cypress/screenshots/` on test failures
- **Videos:** Can be configured to record test runs for debugging
- **Logs:** Console and execution logs available in the test runner

## ✅ Best Practices

### Test Writing
- ✓ Use descriptive test names that explain what is being tested
- ✓ Implement proper `beforeEach` hooks for test setup
- ✓ Avoid hard-coded waits; use Cypress built-in waiting mechanisms
- ✓ Use meaningful selectors (prioritize: data-testid > classes > element selectors)

### Selectors Strategy
- Use CSS selectors for performance: `cy.get("input[name='search_query']")`
- Use XPath for complex scenarios: `cy.xpath('//button[@type="submit"]')`
- Avoid brittle selectors that depend on styling or text content

### Test Isolation
- Each test should be independent and not rely on execution order
- Reset application state with `beforeEach` hooks
- Clean up any test data created during test execution

### Assertions
- Use specific assertions with meaningful messages
- Validate both positive and negative scenarios
- Check for visibility and interactability before actions

### Error Handling
- Use screenshots and logs for debugging failures
- Check browser console for JavaScript errors
- Verify network requests in critical paths

## 🧑‍💻 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and commit: `git commit -am 'Add new feature'`
3. Push to the branch: `git push origin feature/your-feature`
4. Submit a pull request

## 📄 License

This project is licensed under the ISC License. See `package.json` for license details.

---

**Project Status:** Active Development  
**Last Updated:** April 2026  
**Maintainer:** Aamir Saleem

For questions or support, please reach out to the project maintainer.
