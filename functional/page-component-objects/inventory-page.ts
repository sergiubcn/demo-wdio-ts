import { $, browser } from "@wdio/globals";

/**
 * Functional POM using composition.
 */

/**
 * Encapsulates the inventory page's available elements and interactions.
 * @param page The page context.
 * @returns An object with access to elements and interactions.
 */
export const inventoryPage = () => {
  const addToCartButton = (productName: string = ""): ChainablePromiseElement =>
    $(`[data-test*=add-to-cart-${productName}]`);
  const removeFromCartButton = (
    productName: string = "",
  ): ChainablePromiseElement => $(`[data-test*=remove-${productName}]`);

  return {
    /**
     * Loads the Inventory page.
     */
    loadPage: async (): Promise<void> => {
      await browser.url("/inventory.html");
    },
    /**
     * Adds a product to the cart.
     * @param productName The product's name in snake-case.
     */
    addProductToCart: async (productName: string): Promise<void> => {
      await addToCartButton(productName).click();
      await removeFromCartButton(productName).waitForDisplayed();
    },
  };
};
