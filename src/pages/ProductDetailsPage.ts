import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductDetailsPage extends BasePage {
  private readonly productDetailsContainer: Locator;
  private readonly productName: Locator;
  private readonly productDescription: Locator;
  private readonly productPrice: Locator;

  constructor(page: Page) {
    super(page);

    this.productDetailsContainer = page.locator(
      '[data-test="inventory-item"]'
    );
    this.productName = page.locator(
      '[data-test="inventory-item-name"]'
    );
    this.productDescription = page.locator(
      '[data-test="inventory-item-desc"]'
    );
    this.productPrice = page.locator(
      '[data-test="inventory-item-price"]'
    );
  }

  async verifyPageLoaded(): Promise<void> {
    await this.waitForVisible(this.productDetailsContainer);
  }

  async verifyProductName(expectedName: string): Promise<void> {
    await expect(this.productName).toHaveText(expectedName);
  }

  async verifyProductDescription(expectedDescription: string): Promise<void> {
    await expect(this.productDescription).toHaveText(expectedDescription);
  }
  
  async verifyProductPrice(expectedPrice: string): Promise<void> {
    await expect(this.productPrice).toHaveText(expectedPrice);
  }
}