import { logInfoMessage } from '../utils/logger';

enum locators {
    getStartedButton = '[data-testid=getStarted]',
}

function navigateToLandingPage(): void {
    browser.url('');
    browser.$(locators.getStartedButton).waitForDisplayed();
    logInfoMessage('Loaded the landing page.')
}

function proceedToAddAccount(): void {
    const el = browser.$(locators.getStartedButton);
    el.waitForDisplayed();
    el.click();
    el.waitForDisplayed({ reverse: true, timeout: 1500 });
    logInfoMessage('Proceed to app.')
}

export { navigateToLandingPage, proceedToAddAccount };
