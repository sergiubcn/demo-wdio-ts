import { $, browser } from "@wdio/globals";

/**
 * Functional POM using composition.
 */

/**
 * Encapsulates the login page's available elements and interactions.
 * @returns An object with access to elements and interactions.
 */
export const loginPage = () => {
  const errorMessage = $("[data-test=error]");
  const loginButton = $("#login-button");
  const passwordTextField = $("[data-test=password]");
  const usernameTextField = $("[data-test=username]");

  return {
    /**
     * Retrieves the error message if it is displayed.
     * @returns The error message string.
     */
    getErrorMessage: async (): Promise<string> => {
      return await errorMessage.getText();
    },
    /**
     * Loads the login page and waits for the login button in order to ensure that the page is actionable.
     */
    loadPage: async (): Promise<void> => {
      await browser.url("/");
      await loginButton.waitForDisplayed();
    },
    /**
     * Attempts to log the user into the account.
     * @param password The user account's password.
     * @param username The user account's username.
     */
    login: async (password: string, username: string): Promise<void> => {
      await usernameTextField.addValue(username);
      await passwordTextField.addValue(password);
      await loginButton.click();
    },
  };
};
