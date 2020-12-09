type accountDataType = {
    accountName: string,
    accountType: string,
    interestRate: number,
    minPayment: number,
    statementBalance: number,
};

const accountData :accountDataType = {
    accountName: 'Test Account',
    accountType: 'Credit card',
    interestRate: 11,
    minPayment: 100,
    statementBalance: 1000,
};

export default accountData;