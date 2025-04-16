import { browser, expect } from "@wdio/globals";

import { inventoryPage } from "../page-component-objects/inventory-page";
import { header } from "../page-component-objects/header";
import { productData } from "../../data/product-data";
import { validUser } from "../../data/user-data";

describe("Products - Functional paradigm", () => {
  before(async () => {
    await browser.url("/");
    await browser.addCookie({
      name: "session-username",
      value: validUser.username,
    });
  });

  it("Should allow a user to add a product to cart", async () => {
    const invPage = inventoryPage();
    await invPage.loadPage();
    await invPage.addProductToCart(productData.backpackProductName);

    const hd = header();
    expect(await hd.getShoppingCartBadgeNumber()).toBe("1");
  });
});
