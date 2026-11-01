# Playwright TypeScript Test Automation Portfolio

A public demonstration project showing a maintainable Playwright + TypeScript test automation structure.

## What this project demonstrates
- Page Object Model (POM)
- Reusable test fixtures and configuration
- UI test automation
- API test automation
- Environment-based configuration
- HTML test reporting
- GitHub Actions CI execution

> This is an independent demonstration project. It contains no employer or client source code, credentials, test data, or proprietary implementation.

## Prerequisites
- Node.js 20+
- npm

## Setup
```bash
npm install
npx playwright install --with-deps
```

## Run tests
```bash
npm test
npm run test:ui
npm run test:api
npm run report
```

## Project structure
```text
.
├── .github/workflows/playwright.yml
├── src/
│   ├── pages/TodoPage.ts
│   └── utils/env.ts
├── tests/
│   ├── fixtures/baseTest.ts
│   ├── ui/todo.spec.ts
│   └── api/posts.spec.ts
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

## Design notes
- UI interactions are encapsulated in a page object.
- Tests use Playwright's built-in fixtures and isolated browser contexts.
- API checks use Playwright's `request` fixture.
- CI runs the test suite and publishes the HTML report as a workflow artifact.

## Suggested enhancements
1. Add schema validation for API responses.
2. Add visual regression checks.
3. Add test tagging and environment-specific projects.
4. Add Docker-based execution.
5. Add richer reporting and flaky-test analysis.

## Author
Akash Nehra  
Quality Engineering | Test Automation | Playwright | TypeScript
