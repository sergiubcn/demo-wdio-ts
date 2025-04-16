import { expect } from "@wdio/globals";

import Customer from "../users/customer";
import { lockedOutUser } from "../../data/user-data";

describe("Authentication - Screenplay pattern", () => {
  it("Should not allow a locked out user authenticate", async () => {
    const customer = new Customer();
    await customer.loadLoginPageAndAuthenticate(
      lockedOutUser.password,
      lockedOutUser.username,
    );
    expect(await customer.getLoginPageErrorMessage()).toBeTruthy();
  });
});
