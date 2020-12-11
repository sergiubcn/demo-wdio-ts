function accountNamePartialLocator(accountId?: string): string {
    const locator = '[data-testid*=accountNickname-]';
    if (!accountId) {
        return locator;
    }

    return locator.replace(']', `${accountId}]`);
}

function checkIfAccountExistsInList(accountId?: string): boolean {
    try {
        browser.$(accountNamePartialLocator(accountId)).waitForDisplayed();
        return true;
    } catch (e) {
        return false;
    }
}

export { accountNamePartialLocator, checkIfAccountExistsInList };
