import { $, browser } from "@wdio/globals";

/**
 * Object-oriented POM using composition.
 */

/**
 * Represents the login page's available elements and interactions.
 */
export default class LoginPage {
  private get errorMessage(): ChainablePromiseElement {
    return $("[data-test=error]");
  }

  private get loginButton(): ChainablePromiseElement {
    return $("#login-button");
  }

  private get passwordTextField(): ChainablePromiseElement {
    return $("[data-test=password]");
  }

  private get usernameTextField(): ChainablePromiseElement {
    return $("[data-test=username]");
  }

  constructor() {}

  /**
   * Retrieves the error message if it is displayed.
   * @returns The error message string.
   */
  async getErrorMessage(): Promise<string> {
    return await this.errorMessage.getText();
  }

  /**
   * Loads the root page. In the case of an unauthenticated user this is the Login page.
   */
  public async loadPage(): Promise<void> {
    await browser.url("/");
  }

  /**
   * Attempts to log the user into the account.
   * @param password The user account's password.
   * @param username The user account's username.
   */
  public async login(username: string, password: string): Promise<void> {
    await this.usernameTextField.setValue(username);
    await this.passwordTextField.setValue(password);
    await this.loginButton.click();
  }
}
