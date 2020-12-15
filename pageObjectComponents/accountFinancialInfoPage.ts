import { logInfoMessage } from '../utils/logger';

enum locators {
    addButton = '[data-testid=add-account-3]',
    interestRateTextField = '[data-testid=interestRate] input',
    minPaymentTextField = '[data-testid=minMonthlyPayment]',
    statementBalanceTextField = '[data-testid=statementBalance]',
}

interface AccountFinancialData {
    interestRate: number;
    minPayment: number;
    statementBalance: number;
}

/**
 * Fills in the account's financial data and submits the form.
 * After this flow step the account is created.
 * @param0 {Object} financialData 
 * @param {number} financialData.interestRate  The account's interest rate.
 * @param {number} financialData.minPayment The minimum payment for each month.
 * @param {number} financialData.statementBalance The account's statement balance. 
 */
function setDataAndSubmit({ interestRate, minPayment, statementBalance }: AccountFinancialData): void {
    browser.$(locators.statementBalanceTextField).waitForDisplayed();
    browser.$(locators.statementBalanceTextField).setValue(statementBalance);
    browser.$(locators.minPaymentTextField).setValue(minPayment);
    browser.$(locators.interestRateTextField).setValue(interestRate);

    browser.$(locators.addButton).click();
    browser.$(locators.addButton).waitForDisplayed({ reverse: true });
    logInfoMessage('Provided account financial info and added account.');
}

export { setDataAndSubmit };
