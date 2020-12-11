enum locators {
    nextButton = '[data-testid=proceed-to-add-account-button]',
}

function acknowledgeDisclaimerAndProceed(): void {
    const el = browser.$(locators.nextButton);
    el.waitForDisplayed();
    el.click();
    el.waitForDisplayed({ reverse: true, timeout: 1500 });
}

export { acknowledgeDisclaimerAndProceed };
