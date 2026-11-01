import { test as base } from '@playwright/test';
import { TodoPage } from '../../src/pages/TodoPage';

type AppFixtures = {
  todoPage: TodoPage;
};

export const test = base.extend<AppFixtures>({
  todoPage: async ({ page }, use) => {
    await use(new TodoPage(page));
  }
});

export { expect } from '@playwright/test';
