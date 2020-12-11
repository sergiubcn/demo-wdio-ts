interface AccountData {
    accountName: string;
    accountType: string;
    interestRate: number;
    minPayment: number;
    statementBalance: number;
}

export const accountData: AccountData = {
    accountName: 'Test Account',
    accountType: 'Credit card',
    interestRate: 11,
    minPayment: 100,
    statementBalance: 1000,
};
