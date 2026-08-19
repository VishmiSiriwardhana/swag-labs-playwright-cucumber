import { When, Then, DataTable } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

When(
    'the user opens the shopping cart',
    async function (this: CustomWorld) {
        await this.inventoryPage.openCart();
    }
);

Then(
    'the shopping cart should display {string}',
    async function (this: CustomWorld, productName: string) {
        await this.cartPage.verifyProductDisplayed(productName);
    }
);

Then(
    'the cart should contain {int} item',
    async function (this: CustomWorld, expectedCount: number) {
        await this.inventoryPage.verifyCartItemCount(expectedCount);
    }
);

When(
    'the user removes {string} from the cart',
    async function (this: CustomWorld, productName: string) {
        await this.cartPage.removeProduct(productName);
    }
);

When(
    'the user proceeds to checkout',
    async function (this: CustomWorld) {
        await this.cartPage.clickCheckout();
    }
);

Then(
    'the cart should contain {int} items',
    async function (this: CustomWorld, expectedCount: number) {
        await this.inventoryPage.verifyCartItemCount(expectedCount);
    }
);

Then(
    'the following products should be in the cart',
    async function (this: CustomWorld, dataTable: DataTable) {
        const expectedProducts = dataTable
            .rows()
            .map((row) => row[0]);

        await this.cartPage.verifyProductsInCart(expectedProducts);
    }
);

Then(
    'the product {string} should not be in the cart',
    async function (this: CustomWorld, productName: string) {
      await this.cartPage.verifyProductNotInCart(productName);
    }
);