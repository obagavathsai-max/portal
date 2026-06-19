import { test, expect } from '@playwright/test';

test.describe('Portal Branding and Data Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate and Login
    await page.goto('http://localhost:3000/login');
    await page.fill('#username', 'av.sc.u4aie23132');
    await page.fill('#password', 'niyathi@0125');
    await page.click('button:has-text("LOGIN")');
    await page.waitForURL('**/dashboard');
  });

  test('Check Attendance Branding and Data', async ({ page }) => {
    // Open Exam Scores menu
    const examScoresMenu = page.locator('button:has-text("Exam Scores")');
    await examScoresMenu.click();

    await page.click('a[href="/attendance"]');
    await page.waitForURL('**/attendance');

    // Select Semester 6 and click button to show report
    await page.selectOption('select', '6');
    await page.click('button:has-text("Show Course Wise Report")');

    // Wait for transitions
    await page.waitForTimeout(1000);

    // Check Teal header color (#26a69a)
    const header = page.locator('thead tr').first();
    const bgColor = await header.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // rgb(38, 166, 154) is #26a69a
    expect(bgColor).toBe('rgb(38, 166, 154)');

    // Check Attendance Percentage color (#f05050)
    const percentageCell = page.locator('table tbody tr').first().locator('td').nth(8); // Percentage is 9th column (index 8)
    const cellBgColor = await percentageCell.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // rgb(240, 80, 80) is #f05050
    expect(cellBgColor).toBe('rgb(240, 80, 80)');

    // Check course from data
    await expect(page.locator('text=Big Data Analytics')).toBeVisible();
  });

  test('Check Grades for A grades', async ({ page }) => {
    // Open Exam Scores menu
    const examScoresMenu = page.locator('button:has-text("Exam Scores")');
    await examScoresMenu.click();

    await page.click('a[href="/grades"]');
    await page.waitForURL('**/grades');

    // Wait for transitions and rendering
    await page.waitForTimeout(1000);

    // Check for "A" grades in Semester 1
    await page.selectOption('select', '1');

    // Wait for re-render after select
    await page.waitForTimeout(500);

    const aGrades = page.locator('td:has-text("A")').filter({ hasText: /^A$/ });
    const count = await aGrades.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });
});
