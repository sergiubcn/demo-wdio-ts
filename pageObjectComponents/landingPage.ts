import { locators } from '../types/common/locators';

const locators = {
    getStartedButton: '[data-testid=getStarted]',
};

function navigateToLandingPage () :void {
    browser.url('');
    browser.$(locators.getStartedButton).waitForDisplayed();
}

function proceedToAddAccount() :void {
    const el = browser.$(locators.getStartedButton);
    el.waitForDisplayed();
    el.click();
    el.waitForDisplayed({ reverse: true, timeout: 1500 });
}

export { navigateToLandingPage, proceedToAddAccount }
