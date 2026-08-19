import {
    Before,
    After,
    Status,
    setDefaultTimeout
  } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
  
  import {
    chromium,
    Browser
  } from '@playwright/test';
  
  import { CustomWorld } from '../support/world';

  import { InventoryPage } from '../pages/InventoryPage';
  import { CartPage } from '../pages/CartPage';
  import { CheckoutPage } from '../pages/CheckoutPage';
  import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
  import { OrderConfirmationPage } from '../pages/OrderConfirmationPage';
  import { ProductDetailsPage } from '../pages/ProductDetailsPage';

  setDefaultTimeout(30 * 1000);
  
  Before(async function (this: CustomWorld) {
    this.browser = await chromium.launch({
      headless: true
    });
  
    this.context = await this.browser.newContext();
  
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