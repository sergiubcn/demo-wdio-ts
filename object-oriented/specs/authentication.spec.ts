import { expect } from "@wdio/globals";

import LoginPage from "../page-component-objects/login-page";
import { lockedOutUser } from "../../data/user-data";

describe("Authentication - Object oriented paradigm", () => {
  it("Should not allow a locked out user authenticate", async () => {
    const loginPg = new LoginPage();
    await loginPg.loadPage();
    await loginPg.login(lockedOutUser.username, lockedOutUser.password);
    expect(await loginPg.getErrorMessage()).toBeTruthy();
  });
});
