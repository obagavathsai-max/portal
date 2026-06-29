import { test, expect } from '@playwright/test';

test.describe('Portal Branding and Data Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate and Login
    await page.goto('http://localhost:3000/login');
    // Login uses 'LOGIN' text
    await page.fill('#username', 'av.sc.u4aie23132');
    await page.fill('#password', 'niyathi@0125');
    await page.click('button:has-text("LOGIN")');
    await expect(page).toHaveURL('http://localhost:3000/dashboard');
  });

  test('Check Attendance Branding and Data', async ({ page }) => {
    // Need to expand menu first
    await page.click('button:has-text("Exam Scores")');
    await page.click('a[href="/attendance"]');
    await expect(page).toHaveURL('http://localhost:3000/attendance');

    // Check Teal header color (#26a69a)
    // The tr has the bg-aums-teal class
    const tr = page.locator('thead tr').first();
    const bgColor = await tr.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // rgb(38, 166, 154) is #26a69a
    expect(bgColor).toBe('rgb(38, 166, 154)');

    // Check Attendance Percentage color (#f05050)
    // In Attendance.tsx, the percentage is inside a span inside the 9th td (index 8)
    const percentageSpan = page.locator('table tbody tr').first().locator('td').nth(8).locator('span');
    const spanBgColor = await percentageSpan.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // rgb(240, 80, 80) is #f05050
    expect(spanBgColor).toBe('rgb(240, 80, 80)');
  });

  test('Check Grades for A grades', async ({ page }) => {
    // Need to expand menu first
    if (!(await page.isVisible('a[href="/grades"]'))) {
        await page.click('button:has-text("Exam Scores")');
    }
    await page.click('a[href="/grades"]');
    await expect(page).toHaveURL('http://localhost:3000/grades');

    // Check for "A" grades in Semester 4 (default)
    const aGrades = page.locator('span:text-is("A")');
    const count = await aGrades.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });
});
