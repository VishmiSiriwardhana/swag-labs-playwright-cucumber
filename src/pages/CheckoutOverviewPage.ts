import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutOverviewPage extends BasePage {
  private readonly pageTitle: Locator;
  private readonly finishButton: Locator;
  private readonly cancelButton: Locator;
  private readonly summaryInfo: Locator;
  //private readonly totalPrice: Locator;
  private readonly totalLabel: Locator;
  private readonly overviewContainer: Locator;

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.locator('[data-test="title"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.cancelButton = page.locator('[data-test="cancel"]');
    this.summaryInfo = page.locator('[data-test="payment-info"]');
    this.totalLabel = page.locator('[data-test="total-label"]');
    this.overviewContainer = page.locator('[data-test="checkout-summary-container"]');
  }

  async verifyOverviewPageLoaded(): Promise<void> {
    await expect(this.pageTitle).toHaveText('Checkout: Overview');
  }

  async verifyTotalPriceDisplayed(): Promise<void> {
    await expect(this.totalLabel).toBeVisible();
  }

  async finishOrder(): Promise<void> {
    await this.finishButton.click();
  }

  async cancelCheckout(): Promise<void> {
    await this.cancelButton.click();
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.overviewContainer).toBeVisible();
  }

  async verifyOrderTotalDisplayed(): Promise<void> {
    await expect(this.totalLabel).toBeVisible();
  }
}