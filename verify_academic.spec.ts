import { test, expect } from '@playwright/test';

test('verify academic data', async ({ page }) => {
  await page.goto('http://localhost:3002/grades');

  // Login if necessary (the app might have a session or requires manual login)
  // Check if we are on the login page
  if (page.url().includes('/login')) {
    await page.fill('input[placeholder="Username"]', 'AV.SC.U4AIE23132');
    await page.fill('input[placeholder="Password"]', '8106736469');
    await page.click('button:has-text("LOGIN")');
    await page.waitForURL('**/grades');
  }

  // Verify CGPA
  const cgpa = await page.textContent('span:has-text("Current CGPA") + span');
  console.log('CGPA found:', cgpa);
  expect(cgpa?.trim()).toBe('9.41');

  // Select Semester 5 and verify SGPA
  await page.selectOption('select', '5');
  const sgpa = await page.textContent('tr.bg-gray-50 >> td:nth-child(2)');
  console.log('SGPA Semester 5 found:', sgpa);
  expect(sgpa?.trim()).toBe('9.54');

  await page.screenshot({ path: '/home/jules/verification/academic_data_check.png', fullPage: true });
});
