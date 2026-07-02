import { test, expect } from '@playwright/test';

test.describe('Portal Branding and Data Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate and Login
    await page.goto('http://localhost:3000/login');
    await page.fill('#username', 'av.sc.u4aie23132');
    await page.fill('#password', 'niyathi@0125');
    await page.click('button:has-text("LOGIN")');
    await expect(page).toHaveURL('http://localhost:3000/dashboard');
  });

  test('Check Attendance Branding and Data', async ({ page }) => {
    // Expand 'Exam Scores' menu
    await page.click('button:has-text("Exam Scores")');
    await page.click('a:has-text("View Attendance")');
    await expect(page).toHaveURL('http://localhost:3000/attendance');

    // Check Teal header color (#26a69a)
    // The background is applied to the row (tr) in my code: <tr className="text-white bg-aums-teal">
    const headerRow = page.locator('thead tr').first();
    await expect(headerRow).toHaveCSS('background-color', 'rgb(38, 166, 154)');

    // Check Attendance Percentage color (#f05050)
    // Percentage is the 9th column (index 8)
    const percentageSpan = page.locator('table tbody tr').first().locator('td').nth(8).locator('span');
    await expect(percentageSpan).toHaveCSS('background-color', 'rgb(240, 80, 80)');

    // Check course data
    await expect(page.locator('text=23AIE211 - Operating Systems')).toBeVisible();
  });

  test('Check Grades for A grades', async ({ page }) => {
    // Expand 'Exam Scores' menu
    await page.click('button:has-text("Exam Scores")');
    await page.click('a:has-text("View Grades")');
    await expect(page).toHaveURL('http://localhost:3000/grades');

    // Check for "A" grades in Semester 3
    await page.selectOption('select', 'Semester 3');
    const aGrades = page.locator('span:text-is("A")');
    const count = await aGrades.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });
});
