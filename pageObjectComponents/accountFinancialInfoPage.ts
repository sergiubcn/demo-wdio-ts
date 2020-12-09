import { locators } from '../types/common/locators';

const locators = {
    addButton: '[data-testid=add-account-3]',
    interestRateTextField: '[data-testid=interestRate] input',
    minPaymentTextField: '[data-testid=minMonthlyPayment]',
    statementBalanceTextField: '[data-testid=statementBalance]',
};

type accountFinancialData = {
    interestRate: number,
    minPayment: number,
    statementBalance: number,
};

function setDataAndSubmit({ interestRate, minPayment, statementBalance } :accountFinancialData) :void {
    browser.$(locators.statementBalanceTextField).waitForDisplayed();
    browser.$(locators.statementBalanceTextField).setValue(statementBalance);
    browser.$(locators.minPaymentTextField).setValue(minPayment);
    browser.$(locators.interestRateTextField).setValue(interestRate);

    browser.$(locators.addButton).click();
    browser.$(locators.addButton).waitForDisplayed({ reverse: true });
    console.info('Provided account financial info and added account.');
}

export { setDataAndSubmit };