import { test, expect } from '../fixtures/baseTest';

test.describe('Todo application', () => {
  test('user can add and complete a task', async ({ todoPage }) => {
    const task = `Prepare automation portfolio ${Date.now()}`;

    await todoPage.open();
    await todoPage.addTodo(task);
    await todoPage.expectTodoVisible(task);
    await todoPage.completeTodo(task);
    await todoPage.expectTodoCompleted(task);
  });
});
