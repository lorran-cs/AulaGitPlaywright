import { test, expect } from '@playwright/test';

test('Login com Sucesso', async ({ page }) => {
  // Gera data e hora atuais automaticamente
  const agora = new Date();
  const data = agora.toLocaleDateString('pt-BR'); // formato 08/11/2025
  const hora = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); // formato 15:11
  const texto = `Teste ${data} - ${hora}`;

  // Acessa o site
  await page.goto('https://automationpratice.com.br/');
  
  // Faz as ações de busca
  await page.getByRole('banner').getByRole('link', { name: 'img' }).click();
  await page.getByRole('searchbox', { name: 'type keyword(s) here' }).click();
  await page.getByRole('searchbox', { name: 'type keyword(s) here' }).fill(texto);

  // (Opcional) verifica se o valor foi preenchido corretamente
  await expect(page.getByRole('searchbox', { name: 'type keyword(s) here' })).toHaveValue(texto, { timeout: 20_000 });

});


