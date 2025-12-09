import { test, expect } from '@playwright/test';

test('Teste Automatizado', async ({ page }) => {

  await page.goto('https://wise-shark-lpzmbt-dev-ed.trailblaze.my.salesforce-setup.com/lightning/setup/SetupOneHome/home');
  await page.fill('#username', 'lorran@wise-shark-lpzmbt.com');
  await page.fill('#password', 'gohan2020oi11L8iYx45oCT7k9V1etvN1S'); // senha + token
  await page.click('#Login');

  await page.waitForURL('**/home');
  await expect(page).toHaveURL(/home/);

  
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('lorran@wise-shark-lpzmbt.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('gohan2020');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('textbox', { name: 'Código de verificação' }).click();
  await page.getByRole('textbox', { name: 'Código de verificação' }).fill('gohan2020oi11L8iYx45oCT7k9V1etvN1S');
  await page.getByRole('button', { name: 'Verificar' }).click();
  await page.goto('https://wise-shark-lpzmbt-dev-ed.trailblaze.my.salesforce-setup.com/lightning/setup/SetupOneHome/home');
  await page.getByRole('button', { name: 'Iniciador de aplicativos' }).click();
  await page.getByRole('option', { name: 'Vendas' }).click();
  await page.goto('https://wise-shark-lpzmbt-dev-ed.trailblaze.lightning.force.com/lightning/page/home');
  await page.getByRole('link', { name: 'Contas' }).click();
  await page.getByRole('button', { name: 'Criar' }).click();
  await page.getByRole('textbox', { name: 'Nome da conta' }).click();
  await page.getByRole('textbox', { name: 'Nome da conta' }).fill('Teste 001 automatizado');
  await page.getByRole('button', { name: 'Salvar', exact: true }).click();
});