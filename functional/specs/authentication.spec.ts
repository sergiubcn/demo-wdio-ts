import { expect } from "@wdio/globals";

import { header } from "../page-component-objects/header";
import { lockedOutUser, validUser } from "../../data/user-data";
import { loginPage } from "../page-component-objects/login-page";

describe("Authentication", () => {
  it("Should allow a user to authenticate with valid credentials", async () => {
    const loginPg = loginPage();
    await loginPg.loadPage();
    await loginPg.login(validUser.password, validUser.username);

    const hd = header();
    expect(await hd.getShoppingCartContainer()).toBeDisplayed();
  });

  it("Should not allow a locked out user to authenticate", async () => {
    const loginPg = loginPage();
    await loginPg.loadPage();
    await loginPg.login(lockedOutUser.password, lockedOutUser.username);
    expect(await loginPg.getErrorMessage()).toBeTruthy();
  });
});
