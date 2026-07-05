import { test, expect } from '@playwright/test';

test.describe('Portal Branding and Data Verification', () => {
  test('Login and Branding Check', async ({ page }) => {
    await page.goto('http://localhost:3000/login');

    // Check Login Page Background
    const body = page.locator('body');
    const bgColor = await body.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // rgb(137, 209, 194) is #89d1c2
    expect(bgColor).toBe('rgb(137, 209, 194)');

    // Login
    await page.fill('#username', 'av.sc.u4aie23132');
    await page.fill('#password', 'niyathi@0125');
    await page.click('button:has-text("LOGIN")');
    await expect(page).toHaveURL('http://localhost:3000/dashboard');

    // Check Teal color on Dashboard
    const homeTab = page.locator('button:has-text("Home")');
    const tabBg = await homeTab.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // rgb(38, 166, 154) is #26a69a
    expect(tabBg).toBe('rgb(38, 166, 154)');
  });

  test('Check Attendance Branding', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('#username', 'av.sc.u4aie23132');
    await page.fill('#password', 'niyathi@0125');
    await page.click('button:has-text("LOGIN")');

    await page.goto('http://localhost:3000/attendance');

    // Wait for the select to be present
    await page.waitForSelector('select');
    await page.selectOption('select', 'Semester 6');
    await page.click('button:has-text("Attendance Summary")');

    // Check Teal header color (#26a69a)
    const header = page.locator('thead tr').first();
    const bgColor = await header.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    expect(bgColor).toBe('rgb(38, 166, 154)');
  });
});
