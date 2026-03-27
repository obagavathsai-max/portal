import { test, expect } from '@playwright/test';

test.describe('Portal Branding and Data Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate and Login
    await page.goto('http://localhost:3000/login');
    // Ensure "Sign In" is visible to confirm page loaded
    await expect(page.locator('text=Sign In')).toBeVisible();
    await page.fill('input[id="username"]', 'av.sc.u4aie23132');
    await page.fill('input[id="password"]', 'niyathi@0125');
    // Use the exact text for login button
    await page.click('button:has-text("LOGIN")');
    await expect(page).toHaveURL('http://localhost:3000/dashboard', { timeout: 10000 });
  });

  test('Check Attendance Branding and Data', async ({ page }) => {
    // NavLink items are in the sidebar, nested under categories
    // "Exam Scores" needs to be expanded to see "View Attendance"
    // By default, it seems "Personal" is expanded in the code.
    // Let's click "Exam Scores" first.
    await page.click('button:has-text("Exam Scores")');
    await page.click('a:has-text("View Attendance")');
    await expect(page).toHaveURL('http://localhost:3000/attendance');

    // Select Semester 6 for course data
    await page.selectOption('select', '6');
    await page.click('button:has-text("Attendance Summary")');

    // Check Teal header color (#26a69a)
    const header = page.locator('thead tr').first();
    const bgColor = await header.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // rgb(38, 166, 154) is #26a69a
    expect(bgColor).toBe('rgb(38, 166, 154)');

    // Check Attendance Percentage color (#f05050)
    // The first row should have a percentage cell with bg-aums-red-error
    const percentageCell = page.locator('table tbody tr').first().locator('td').nth(8);
    const cellBgColor = await percentageCell.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // rgb(240, 80, 80) is #f05050
    expect(cellBgColor).toBe('rgb(240, 80, 80)');

    // Check course data
    await expect(page.locator('text=Software Engineering')).toBeVisible();
  });

  test('Check Grades for A grades', async ({ page }) => {
    await page.click('button:has-text("Exam Scores")');
    await page.click('a:has-text("View Grades")');
    await expect(page).toHaveURL('http://localhost:3000/grades');

    // Check for "A" grades in Semester 1
    await page.selectOption('select', '1');
    const aGrades = page.locator('td:text-is("A")');
    const count = await aGrades.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });
});
