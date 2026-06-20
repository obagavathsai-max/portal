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
    // Expand Exam Scores if not expanded
    const examScoresButton = page.locator('button:has-text("Exam Scores")');
    const isExpanded = await examScoresButton.evaluate(el => {
        const next = el.nextElementSibling;
        return next !== null && window.getComputedStyle(next).display !== 'none';
    });
    if (!isExpanded) {
        await examScoresButton.click();
    }

    await page.click('a:has-text("View Attendance")');
    await expect(page).toHaveURL('http://localhost:3000/attendance');

    // Wait for the h1 to be visible
    await expect(page.locator('h1')).toContainText('COMPREHENSIVE ATTENDANCE REPORT');

    // Select Semester 6 to see data
    await page.selectOption('select', '6');
    await page.click('button:has-text("Attendance Summary")');

    // Wait for table header and check color
    const firstTh = page.locator('thead th').first();
    await expect(firstTh).toBeVisible();

    const thBgColor = await firstTh.evaluate((el) => {
        // Walk up if transparent
        let current: HTMLElement | null = el;
        while (current) {
            const bg = window.getComputedStyle(current).backgroundColor;
            if (bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
            current = current.parentElement;
        }
        return 'rgba(0, 0, 0, 0)';
    });
    expect(thBgColor).toBe('rgb(38, 166, 154)');

    // Check Attendance Percentage color (#f05050)
    // Percentage is column 9 (index 8)
    const percentageCell = page.locator('table tbody tr').first().locator('td').nth(8);
    const cellBgColor = await percentageCell.evaluate((el) => window.getComputedStyle(el).backgroundColor);
    // rgb(240, 80, 80) is #f05050
    expect(cellBgColor).toBe('rgb(240, 80, 80)');

    // Check course data from Attendance.tsx
    await expect(page.locator('text=Software Engineering')).toBeVisible();
  });

  test('Check Grades for A grades', async ({ page }) => {
    // Expand Exam Scores if not expanded
    const examScoresButton = page.locator('button:has-text("Exam Scores")');
    const isExpanded = await examScoresButton.evaluate(el => {
        const next = el.nextElementSibling;
        return next !== null && window.getComputedStyle(next).display !== 'none';
    });
    if (!isExpanded) {
        await examScoresButton.click();
    }

    await page.click('a:has-text("View Grades")');
    await expect(page).toHaveURL('http://localhost:3000/grades');

    // Check for "A" grades in Semester 1
    await page.selectOption('select', '1');
    const aGrades = page.locator('td:text-is("A")');
    const count = await aGrades.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });
});
