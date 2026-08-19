import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  private readonly cartItems: Locator;
  private readonly cartItemNames: Locator;
  private readonly cartItemPrices: Locator;
  private readonly removeButtons: Locator;
  private readonly continueShoppingButton: Locator;
  private readonly checkoutButton: Locator;
  private readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);

    //this.cartItems = page.locator('.cart_item');
    this.cartItems = page.locator('[data-test="inventory-item"]');
    //this.cartItemNames = this.cartItems.locator('[data-test="inventory-item-name"]');
    this.cartItemNames = page.locator(
      '[data-test="inventory-item"] [data-test="inventory-item-name"]'
    );
    this.cartItemPrices = this.cartItems.locator('[data-test="inventory-item-price"]');
    this.removeButtons = this.cartItems.locator('[data-test="remove-sauce-labs-backpack"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.pageTitle = page.locator('[data-test="title"]');
  }

  async verifyCartPageLoaded(): Promise<void> {
    await expect(this.pageTitle).toHaveText('Your Cart');
  }

  async verifyProductDisplayed(productName: string): Promise<void> {
    const product = this.cartItemNames.filter({
      hasText: productName
    });
  
    await expect(product).toHaveCount(1);
  }

  async clickCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }

  async continueShopping(): Promise<void> {
    await this.continueShoppingButton.click();
  }

  async removeProduct(productName: string): Promise<void> {
    const product = this.cartItems.filter({
      hasText: productName
    });
  
    await expect(product).toHaveCount(1);
  
    await product
      .locator('button[data-test^="remove"]')
      .click();
  } 

  async verifyProductsInCart(expectedProducts: string[]): Promise<void> {
    const actualProducts = await this.cartItemNames.allTextContents();
  
    expect(actualProducts).toEqual(expectedProducts);
  }

  async verifyProductNotInCart(productName: string): Promise<void> {
    const product = this.cartItems.filter({
      hasText: productName
    });
  
    await expect(product).toHaveCount(0);
  }
}