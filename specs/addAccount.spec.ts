import { strict as assert } from 'assert';

import { acknowledgeDisclaimerAndProceed } from '../pageObjectComponents/disclaimerPage';
import { addAccountDetailsAndProceed } from '../pageObjectComponents/accountDetailsPage';
import { navigateToLandingPage, proceedToAddAccount } from '../pageObjectComponents/landingPage';
import { selectAgreementTypeAndSubmit } from '../pageObjectComponents/agreementsPage';
import { setDataAndSubmit } from '../pageObjectComponents/accountFinancialInfoPage';
import { accountNamePartialLocator, checkIfAccountExistsInList } from '../pageObjectComponents/myAccountsPage';

import accountData from '../data/accountData';

describe('Add account', () => {
    it('should add an account to list', () => {
        navigateToLandingPage();
        proceedToAddAccount();

        acknowledgeDisclaimerAndProceed();

        addAccountDetailsAndProceed(accountData.accountName, accountData.accountType);

        selectAgreementTypeAndSubmit();

        setDataAndSubmit({ 
            interestRate: accountData.interestRate, 
            minPayment: accountData.minPayment, 
            statementBalance: accountData.statementBalance 
        });

        assert.ok(checkIfAccountExistsInList());
        assert.deepEqual(browser.$(accountNamePartialLocator()).getText(), accountData.accountName);
    });
});