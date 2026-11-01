import { expect, Page } from '@playwright/test';

export class TodoPage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto('/todomvc');
  }

  async addTodo(item: string): Promise<void> {
    const input = this.page.getByPlaceholder('What needs to be done?');
    await input.fill(item);
    await input.press('Enter');
  }

  async expectTodoVisible(item: string): Promise<void> {
    await expect(this.page.getByText(item, { exact: true })).toBeVisible();
  }

  async completeTodo(item: string): Promise<void> {
    const row = this.page.locator('li').filter({ hasText: item });
    await row.locator('input[type="checkbox"]').check();
  }

  async expectTodoCompleted(item: string): Promise<void> {
    const row = this.page.locator('li').filter({ hasText: item });
    await expect(row).toHaveClass(/completed/);
  }
}
