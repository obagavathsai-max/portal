import { test, expect } from '@playwright/test';

test.describe('Portal Branding and Data Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate and Login
    await page.goto('http://localhost:3000/login');
    await page.fill('input[id="username"]', 'av.sc.u4aie23132');
    await page.fill('input[id="password"]', 'niyathi@0125');
    await page.click('button:has-text("LOGIN")');
    await expect(page).toHaveURL('http://localhost:3000/dashboard');
  });

  test('Check Attendance Branding and Data', async ({ page }) => {
    // Expand Exam Scores menu first
    await page.click('text=Exam Scores');
    await page.click('a[href="/attendance"]');
    await expect(page).toHaveURL('http://localhost:3000/attendance');

    // Check Teal header color (#26a69a)
    // Using nth(0) or first() and ensuring we wait for the table to render
    await page.waitForSelector('table thead tr');

    const bgColor = await page.evaluate(() => {
        const header = document.querySelector('thead tr');
        if (!header) return 'not found';
        return window.getComputedStyle(header).backgroundColor;
    });

    // rgb(38, 166, 154) is #26a69a
    expect(bgColor).toBe('rgb(38, 166, 154)');

    // Check Attendance Percentage color (#f05050)
    // In our refactored Attendance.tsx, percentage is the 9th column (index 8)
    const percentageCell = page.locator('table tbody tr').first().locator('td').nth(8);
    const cellBgColor = await percentageCell.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // rgb(240, 80, 80) is #f05050
    expect(cellBgColor).toBe('rgb(240, 80, 80)');

    // Check course from image
    await expect(page.locator('text=Principles of Economics')).toBeVisible();
  });

  test('Check Grades for A grades', async ({ page }) => {
    // Expand Exam Scores menu first
    await page.click('text=Exam Scores');
    await page.click('a[href="/grades"]');
    await expect(page).toHaveURL('http://localhost:3000/grades');

    // In Grades.tsx, semester data is static and doesn't change with selection in this mock.
    // However, the test expects at least 2 "A" grades.
    // Our gradeData has 3 "A" grades and 1 "A+".
    const aGrades = page.locator('td:text-is("A")');
    const count = await aGrades.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });
});
