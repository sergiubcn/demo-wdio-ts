import { locators } from '../types/common/locators';

const locators = {
    accountNameTextField: 'input[data-testid=nickname]',
    accountTypeDropDown: '[data-testid=type]',
    nextButton: '[data-testid=add-account-1]',
};

function dropDownOptionLocator(accountType :string) :string {
    return `//div[@data-testid='type']//span[text()='${accountType}']/..`;
}

/**
 * Selects the accounts' type, adds the account's name and submits the form.
 * @param {string} accountName The account's name.
 * @param {string} accountType The account's type.
 */
function addAccountDetailsAndProceed (accountName :string, accountType :string) :void {
    browser.$(locators.accountTypeDropDown).waitForDisplayed();
    browser.$(locators.accountTypeDropDown).click();
    browser.$(dropDownOptionLocator(accountType)).click();

    browser.$(locators.accountNameTextField).setValue(accountName);

    browser.$(locators.nextButton).click();
    browser.$(locators.nextButton).waitForDisplayed({ reverse: true });
    console.info('Provided account info and submitted.');
}

export { addAccountDetailsAndProceed };
