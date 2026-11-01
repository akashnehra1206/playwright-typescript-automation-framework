import { test, expect } from '@playwright/test';
import { config } from '../../src/utils/env';

test.describe('Posts API', () => {
  test('returns a post by id', async ({ request }) => {
    const response = await request.get(`${config.apiBaseUrl}/posts/1`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toMatchObject({
      userId: 1,
      id: 1
    });
    expect(typeof body.title).toBe('string');
    expect(typeof body.body).toBe('string');
  });
});
