import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import checkoutData from '../data/checkoutData.json';

Then(
    'the checkout information page should be displayed',
    async function (this: CustomWorld) {
        await this.checkoutPage.verifyCheckoutPageLoaded();
    }
);

When(
    'the user enters checkout information for {string}',
    async function (this: CustomWorld, customerType: string) {
        const customer = checkoutData[
            customerType as keyof typeof checkoutData
        ];

        if (!customer) {
            throw new Error(
                `Checkout test data "${customerType}" was not found`
            );
        }

        await this.checkoutPage.enterCustomerInformation(
            customer.firstName,
            customer.lastName,
            customer.postalCode
        );
    }
);

Then(
    'the checkout information should be accepted',
    async function (this: CustomWorld) {
        await this.checkoutPage.continueToOverview();
        await this.checkoutPage.verifyCheckoutOverview();
    }
);

When(
    'the user continues checkout',
    async function (this: CustomWorld) {
        await this.checkoutPage.continueCheckout();
    }
);

When(
    'the user continues checkout without entering customer information',
    async function (this: CustomWorld) {
        await this.checkoutPage.continueWithoutInformation();
    }
);

Then(
    'the checkout error message should be displayed as {string}',
    async function (this: CustomWorld, expectedMessage: string) {
        await this.checkoutPage.verifyCheckoutErrorMessage(expectedMessage);
    }
);

When(
    'the user enters first name {string}',
    async function (this: CustomWorld, firstName: string) {
        await this.checkoutPage.enterFirstName(firstName);
    }
);

When(
    'the user enters last name {string}',
    async function (this: CustomWorld, lastName: string) {
        await this.checkoutPage.enterLastName(lastName);
    }
);

When(
    'the user enters postal code {string}',
    async function (this: CustomWorld, postalCode: string) {
        await this.checkoutPage.enterPostalCode(postalCode);
    }
);

Then(
    'the checkout overview page should be displayed',
    async function (this: CustomWorld) {
        await this.checkoutOverviewPage.verifyPageLoaded();
    }
);

Then(
    'the order total should be displayed',
    async function (this: CustomWorld) {
        await this.checkoutOverviewPage.verifyOrderTotalDisplayed();
    }
);

Then(
    'the user should complete the order',
    async function (this: CustomWorld) {
        await this.checkoutOverviewPage.finishOrder();
    }
);

Then(
    'the order confirmation should be displayed',
    async function (this: CustomWorld) {
        await this.orderConfirmationPage.verifyOrderConfirmation();
    }
);
