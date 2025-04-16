import { selectors } from "../../utils/types";

/**
 * Functional POM definitions.
 */
const loginPageSelectors: selectors = {
  errorMessage: "[data-test=error]",
  loginButton: "#login-button",
  passwordTextField: "[data-test=password]",
  usernameTextField: "[data-test=username]",
};

export const getErrorMessage = async () =>
  $(loginPageSelectors.errorMessage).getText();

export const login = async (password: string, username: string) => {
  await $(loginPageSelectors.usernameTextField).addValue(username);
  await $(loginPageSelectors.passwordTextField).addValue(password);
  await $(loginPageSelectors.loginButton).click();
};
