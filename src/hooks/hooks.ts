import {
  Before,
  After,
  Status,
  setDefaultTimeout
} from '@cucumber/cucumber';

import {
  chromium,
  firefox,
  webkit,
  Browser
} from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { OrderConfirmationPage } from '../pages/OrderConfirmationPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';

import { CustomWorld } from '../support/world';

setDefaultTimeout(60 * 1000);

Before(async function (this: CustomWorld) {

  const browserName = process.env.BROWSER || 'chromium';

  let browserType;

  switch (browserName.toLowerCase()) {
    case 'firefox':
      browserType = firefox;
      break;

    case 'webkit':
      browserType = webkit;
      break;

    case 'chromium':
    default:
      browserType = chromium;
      break;
  }

  this.browser = await browserType.launch({
    headless: true,
    timeout: 60000
  });

  this.context = await this.browser.newContext({
    ignoreHTTPSErrors: true
  });

  this.page = await this.context.newPage();

  this.loginPage = new LoginPage(this.page);
  this.inventoryPage = new InventoryPage(this.page);
  this.cartPage = new CartPage(this.page);
  this.checkoutPage = new CheckoutPage(this.page);
  this.checkoutOverviewPage = new CheckoutOverviewPage(this.page);
  this.orderConfirmationPage = new OrderConfirmationPage(this.page);
  this.productDetailsPage = new ProductDetailsPage(this.page);
});

After(async function (this: CustomWorld, scenario) {

  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot({
      path: `screenshots/${Date.now()}-failure.png`,
      fullPage: true
    });

    await this.attach(screenshot, 'image/png');
  }

  if (this.context) {
    await this.context.close();
  }

  if (this.browser) {
    await this.browser.close();
  }
});