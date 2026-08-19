import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;

  protected constructor(page: Page) {
    this.page = page;
  }

  protected async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  protected async fill(
    locator: Locator,
    value: string
  ): Promise<void> {
    await locator.fill(value);
  }

  protected async getText(locator: Locator): Promise<string> {
    return (await locator.textContent())?.trim() ?? '';
  }

  protected async waitForVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  protected async waitForUrl(url: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(url);
  }
}