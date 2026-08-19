import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class OrderConfirmationPage extends BasePage {
  private readonly confirmationHeader: Locator;
  private readonly confirmationMessage: Locator;
  private readonly backHomeButton: Locator;

  constructor(page: Page) {
    super(page);

    this.confirmationHeader = page.locator('[data-test="complete-header"]');
    this.confirmationMessage = page.locator('[data-test="complete-text"]');
    this.backHomeButton = page.locator('[data-test="back-to-products"]');
  }

  async verifyOrderConfirmation(): Promise<void> {
    await expect(this.confirmationHeader).toHaveText(
      'Thank you for your order!'
    );
  }

  async verifyConfirmationMessage(): Promise<void> {
    await expect(this.confirmationMessage).toBeVisible();
  }

  async backToProducts(): Promise<void> {
    await this.backHomeButton.click();
  }
}