// @ts-check
import { test, expect } from '@playwright/test';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';
const LOCALHOST_URL = 'http://localhost:5173/';

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // Funciona con promesas
  // Aquí le decimos que es lo que tiene que hacer, y el test va a esperar a que se cumpla la promesa para continuar con el 
  // siguiente paso.
  
  // Le decimos que recupere de la página el parrafo que encuentre (<p>)
  const text = await page.getByRole('paragraph')
  // Ahora le decimos que recupere de la página la imagen que encuentre (<img>)
  const image = await page.getByRole('img')

  // Ahora le decimos que espere a que el parrafo tenga un texto, y que ese texto no sea vacío.
  const textContent = await text.textContent();
  // Ahora le decimos que espere a que la imagen tenga un atributo src, y que ese atributo no sea vacío.
  const imageSrc = await image.getAttribute('src');

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy();
});

// Ejemplo
/*test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/
