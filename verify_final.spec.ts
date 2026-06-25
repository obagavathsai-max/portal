import { test, expect } from '@playwright/test';

test.describe('Portal Branding and Data Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate and Login
    await page.goto('http://localhost:3000/login');
    await page.fill('#username', 'av.sc.u4aie23132');
    await page.fill('#password', 'niyathi@0125');
    await page.click('button:has-text("LOGIN")');
    await expect(page).toHaveURL('http://localhost:3000/dashboard', { timeout: 10000 });
  });

  test('Check Attendance Branding and Data', async ({ page }) => {
    // Sidebar categories might be collapsed except for 'Personal'
    // Click 'Exam Scores' to expand it
    await page.click('button:has-text("Exam Scores")');
    await page.click('a:has-text("View Attendance")');
    await expect(page).toHaveURL('http://localhost:3000/attendance');

    // Check Teal header color (#26a69a)
    const header = page.locator('thead tr').first();
    const bgColor = await header.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // rgb(38, 166, 154) is #26a69a
    expect(bgColor).toBe('rgb(38, 166, 154)');

    // Check Attendance Percentage bar/text color (#f05050)
    // In the new layout, the percentage is in the 9th column (index 8)
    const percentageCell = page.locator('table tbody tr').nth(2).locator('td').nth(8).locator('span').first();
    const cellBgColor = await percentageCell.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // rgb(240, 80, 80) is #f05050
    expect(cellBgColor).toBe('rgb(240, 80, 80)');

    // Check course from data
    await expect(page.locator('text=19AIE302 - Design and Analysis of Algorithms')).toBeVisible();
  });

  test('Check Grades for A grades', async ({ page }) => {
    await page.click('button:has-text("Exam Scores")');
    await page.click('a:has-text("View Grades")');
    await expect(page).toHaveURL('http://localhost:3000/grades');

    // Just check for the presence of the course name to ensure page loaded
    await expect(page.locator('text=Design and Analysis of Algorithms')).toBeVisible();

    // Check for the "A" grade text in the table
    const aGrades = page.locator('table tbody tr').filter({ hasText: 'A' });
    const count = await aGrades.count();
    // At least 19AIE302 and 19MAT302 have 'A' grade
    expect(count).toBeGreaterThanOrEqual(2);
  });
});
