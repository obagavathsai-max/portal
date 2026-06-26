import { test, expect } from '@playwright/test';

test.describe('Portal Branding and Data Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate and Login
    await page.goto('http://localhost:3000/login');
    // The login button text is "LOGIN" (case-sensitive)
    await page.fill('#username', 'av.sc.u4aie23132');
    await page.fill('#password', 'niyathi@0125');
    await page.click('button:has-text("LOGIN")');
    await expect(page).toHaveURL('http://localhost:3000/dashboard');
  });

  test('Check Attendance Branding and Data', async ({ page }) => {
    // Expand "Exam Scores" menu first
    await page.click('button:has-text("Exam Scores")');
    await page.click('a[href="/attendance"]');
    await expect(page).toHaveURL('http://localhost:3000/attendance');

    // Select Semester 6 to show table
    await page.selectOption('select:near(label:text("Semester"))', '6');
    await page.click('button:has-text("Attendance Summary")');

    // Check Teal header color (#26a69a)
    const header = page.locator('thead tr').first();
    const bgColor = await header.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // rgb(38, 166, 154) is #26a69a
    expect(bgColor).toBe('rgb(38, 166, 154)');

    // Check Attendance Percentage color (#f05050)
    const percentageCell = page.locator('table tbody tr').first().locator('td').nth(8); // 9th column (index 8)
    const cellBgColor = await percentageCell.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // rgb(240, 80, 80) is #f05050
    expect(cellBgColor).toBe('rgb(240, 80, 80)');

    // Check course from mock data
    await expect(page.locator('text=Big Data Analytics')).toBeVisible();
  });

  test('Check Grades for A grades', async ({ page }) => {
    // Expand "Exam Scores" menu first
    await page.click('button:has-text("Exam Scores")');
    await page.click('a[href="/grades"]');
    await expect(page).toHaveURL('http://localhost:3000/grades');

    // Check for "A" grades in Semester 1
    await page.selectOption('select:near(label:text("Semester"))', '1');
    const aGrades = page.locator('td:text-is("A")');
    const count = await aGrades.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });
});
