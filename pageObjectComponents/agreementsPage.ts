enum locators {
    promoAgreementOption = '[data-testid=creditorAgreementPROMO_PERIOD]',
    nextButton = '[data-testid=add-account-2]',
}

function selectAgreementTypeAndSubmit(): void {
    browser.$(locators.promoAgreementOption).waitForDisplayed();
    browser.$(locators.promoAgreementOption).click();
    browser.$(locators.nextButton).click();
    browser.$(locators.nextButton).waitForDisplayed({ reverse: true });
    console.info('Selected agreement type.');
}

export { selectAgreementTypeAndSubmit };
