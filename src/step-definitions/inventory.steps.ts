import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

When(
    'the user adds {string} to the cart',
    async function (this: CustomWorld, productName: string) {
      await this.inventoryPage.addProductToCart(productName);
    }
);

When(
  'the user sorts products by {string}',
  async function (this: CustomWorld, sortOption: string) {
    await this.inventoryPage.sortProducts(sortOption);
  }
);

Then(
  'the products should be sorted by price in ascending order',
  async function (this: CustomWorld) {
    await this.inventoryPage.verifyProductsSortedByPriceAscending();
  }
);

Then(
  'the products should be sorted by {string}',
  async function (this: CustomWorld, sortType: string) {
    switch (sortType) {
      case 'name ascending':
        await this.inventoryPage.verifyProductsSortedByNameAscending();
        break;

      case 'name descending':
        await this.inventoryPage.verifyProductsSortedByNameDescending();
        break;

      case 'price ascending':
        await this.inventoryPage.verifyProductsSortedByPriceAscending();
        break;

      case 'price descending':
        await this.inventoryPage.verifyProductsSortedByPriceDescending();
        break;

      default:
        throw new Error(`Unsupported sort type: ${sortType}`);
    }
  }
);

When(
  'the user opens the {string} product',
  async function (this: CustomWorld, productName: string) {
    await this.inventoryPage.openProduct(productName);
  }
);

Then(
  'the product details page should be displayed',
  async function (this: CustomWorld) {
    await this.productDetailsPage.verifyPageLoaded();
  }
);

Then(
  'the product name should be {string}',
  async function (this: CustomWorld, productName: string) {
    await this.productDetailsPage.verifyProductName(productName);
  }
);

Then(
  'the product description should be {string}',
  async function (this: CustomWorld, description: string) {
    await this.productDetailsPage.verifyProductDescription(description);
  }
);

Then(
  'the product price should be {string}',
  async function (this: CustomWorld, price: string) {
    await this.productDetailsPage.verifyProductPrice(price);
  }
);