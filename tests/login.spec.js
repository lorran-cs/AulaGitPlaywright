import { test, expect } from '@playwright/test';

test('Login Salesforce com senha + token', async ({ page }) => {
  const username = process.env.SF_USERNAME;
  const password = process.env.SF_PASSWORD;
  const token = process.env.SF_TOKEN;

  if (!username || !password || !token) {
    throw new Error('⚠️ Variáveis de ambiente não configuradas no .env');
  }

  await page.goto('https://wise-shark-lpzmbt-dev-ed.trailblaze.lightning.force.com/lightning/page/home');
  await page.fill('#username', username);
  await page.fill('#password', `${password}${token}`); // senha + token concatenados
  await page.click('#Login');

  // espera login concluir
  await page.waitForURL(/lightning|home/);

  // salva sessão pra não precisar logar toda vez
  await page.context().storageState({ path: 'auth.json' });

  await expect(page.url()).toContain('lightning');
});
