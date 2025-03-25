import { $ } from "@wdio/globals";

/**
 * Encapsulates the header's available elements and interactions.
 * @returns An object with access to interactions and elements.
 */
export const header = () => {
  const shoppingCartContainer = $("#shopping_cart_container");
  const shoppingCartBadge = $("[data-test=shopping-cart-badge]");

  return {
    /**
     * Retrieves the number of items in the cart as indicated by the mini shopping cart badge.
     * @returns The number indicated in the mini shopping cart badge.
     */
    getShoppingCartBadgeNumber: async (): Promise<string> =>
      await shoppingCartBadge.getText(),
    /**
     * Retrieves the mini shopping cart element from the header.
     * @returns The header shopping cart container element.
     */
    getShoppingCartContainer: async (): Promise<ChainablePromiseElement> =>
      shoppingCartContainer,
  };
};
