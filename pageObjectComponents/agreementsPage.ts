import { logInfoMessage } from '../utils/logger';

enum locators {
    promoAgreementOption = '[data-testid=creditorAgreementPROMO_PERIOD]',
    nextButton = '[data-testid=add-account-2]',
}

function selectAgreementTypeAndSubmit(): void {
    browser.$(locators.promoAgreementOption).waitForDisplayed();
    browser.$(locators.promoAgreementOption).click();
    browser.$(locators.nextButton).click();
    browser.$(locators.nextButton).waitForDisplayed({ reverse: true });
    logInfoMessage('Selected agreement type.');
}

export { selectAgreementTypeAndSubmit };
