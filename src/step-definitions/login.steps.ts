import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import users from '../data/users.json';

Given(
  'the user is on the SauceDemo login page',
  async function (this: CustomWorld) {
    await this.loginPage.navigate();
  }
);

When(
  'the user logs in with valid credentials',
  async function (this: CustomWorld) {
    await this.loginPage.login(
        users.standardUser.username,
        users.standardUser.password
      );
  }
);

Then(
  'the inventory page should be displayed',
  async function (this: CustomWorld) {
    await this.loginPage.verifyLoginSuccess();
  }
);

Given(
  'the user is logged in',
  async function (this: CustomWorld) {
    await this.loginPage.navigate();

    await this.loginPage.login(
      users.standardUser.username,
      users.standardUser.password
    );
  }
);

When(
  'the user logs in with invalid credentials',
  async function (this: CustomWorld) {
    const invalidUser = users.invalidUser;

    await this.loginPage.login(
      invalidUser.username,
      invalidUser.password
    );
  }
);

Then(
  'the login error message should be displayed',
  async function (this: CustomWorld) {
    await this.loginPage.verifyLoginError(
      'Epic sadface: Username and password do not match any user in this service'
    );
  }
);

When(
  'the user logs in with locked user credentials',
  async function (this: CustomWorld) {
    const lockedOutUser = users.lockedOutUser;

    await this.loginPage.login(
      lockedOutUser.username,
      lockedOutUser.password
    );
  }
);

Then(
  'the locked user error message should be displayed',
  async function (this: CustomWorld) {
    await this.loginPage.verifyLoginError(
      'Epic sadface: Sorry, this user has been locked out.'
    );
  }
);

When(
  'the user logs in with {string} and {string}',
  async function (
    this: CustomWorld,
    username: string,
    password: string
  ) {
    await this.loginPage.login(username, password);
  }
);

Then(
  'the login result should be {string}',
  async function (this: CustomWorld, result: string) {
    switch (result) {
      case 'success':
        await this.inventoryPage.verifyInventoryPageLoaded();
        break;

      case 'error':
        await this.loginPage.verifyLoginError(
          'Epic sadface: Username and password do not match any user in this service'
        );
        break;

      case 'locked':
        await this.loginPage.verifyLoginError(
          'Epic sadface: Sorry, this user has been locked out.'
        );
        break;

      default:
        throw new Error(`Unknown login result: ${result}`);
    }
  }
);