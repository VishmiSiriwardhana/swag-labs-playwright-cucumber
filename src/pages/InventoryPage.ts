import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  private readonly inventoryContainer: Locator;
  private readonly inventoryItems: Locator;
  private readonly productNames: Locator;
  private readonly productPrices: Locator;
  private readonly addToCartButtons: Locator;
  private readonly removeButtons: Locator;
  private readonly cartBadge: Locator;
  private readonly shoppingCartLink: Locator;
  private readonly sortDropdown: Locator;
  private readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);

    this.inventoryContainer = page.locator('[data-test="inventory-container"]');
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.productNames = page.locator('[data-test="inventory-item-name"]');
    this.productPrices = page.locator('[data-test="inventory-item-price"]');
    this.addToCartButtons = page.locator('button[data-test^="add-to-cart"]');
    this.removeButtons = page.locator('button[data-test^="remove"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.pageTitle = page.locator('[data-test="title"]');
  }

  async verifyInventoryPageLoaded(): Promise<void> {
    await this.waitForVisible(this.inventoryContainer);
  }

  async verifyPageTitle(): Promise<void> {
    await expect(this.pageTitle).toHaveText('Products');
  }

  async verifyProductCount(expectedCount: number): Promise<void> {
    await expect(this.productNames).toHaveCount(expectedCount);
  }

  async verifySortOptions(): Promise<void> {
    const options = await this.sortDropdown.locator('option').allTextContents();
    
    expect(options).toEqual([
    'Name (A to Z)',
    'Name (Z to A)',
    'Price (low to high)',
    'Price (high to low)'
    ]);
  }

  async addProductToCart(productName: string): Promise<void> {
    const product = this.inventoryItems.filter({
      hasText: productName
    });
  
    await expect(product).toHaveCount(1);
  
    await product
      .locator('button[data-test^="add-to-cart"]')
      .click();
  }

  /*async verifyAddToCartButtons() {
    await expect(this.addToCartButtons).toHaveCount(6);
  }*/

  async verifyCartItemCount(expectedCount: number): Promise<void> {
    await expect(this.cartBadge).toHaveText(expectedCount.toString());
  }

  /*async verifyCartIcon() {
    await expect(this.shoppingCartLink).toBeVisible();
  }*/

  /*async verifySortDropdown() {
    await expect(this.sortDropdown).toBeVisible();
  }*/

  async openCart(): Promise<void> {
    await this.shoppingCartLink.click();
  }

  async sortProducts(sortOption: string): Promise<void> {
    await this.sortDropdown.selectOption({ label: sortOption });
  }

  async verifyProductsSortedByPriceAscending(): Promise<void> {
    const priceTexts = await this.productPrices.allTextContents();
  
    const prices = priceTexts.map((price) =>
      Number(price.replace('$', ''))
    );
  
    const sortedPrices = [...prices].sort((a, b) => a - b);
  
    expect(prices).toEqual(sortedPrices);
  }

  async verifyProductsSortedByNameAscending(): Promise<void> {
    const names = await this.productNames.allTextContents();
  
    const sortedNames = [...names].sort((a, b) =>
      a.localeCompare(b)
    );
  
    expect(names).toEqual(sortedNames);
  }
  
  async verifyProductsSortedByNameDescending(): Promise<void> {
    const names = await this.productNames.allTextContents();
  
    const sortedNames = [...names].sort((a, b) =>
      b.localeCompare(a)
    );
  
    expect(names).toEqual(sortedNames);
  }
  
  async verifyProductsSortedByPriceDescending(): Promise<void> {
    const priceTexts = await this.productPrices.allTextContents();
  
    const prices = priceTexts.map((price) =>
      Number(price.replace('$', ''))
    );
  
    const sortedPrices = [...prices].sort((a, b) => b - a);
  
    expect(prices).toEqual(sortedPrices);
  }

  async openProduct(productName: string): Promise<void> {
    const product = this.inventoryItems.filter({
      hasText: productName
    });
  
    await expect(product).toHaveCount(1);
  
    await product.locator('[data-test="inventory-item-name"]').click();
  }
}