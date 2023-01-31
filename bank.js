class Bank {
    constructor() {
        this._accounts = new Array();
    }
    addAccount(number) {
        let account1 = new Account(number);
        this._accounts.push(account1);
        return account1.getNumber();
    }
    addSavingAccount(number, interest) {
        let account2 = new SavingAccount(number, interest);
        this._accounts.push(account2);
        return account2.getNumber();
    }
    addCheckingAccount(number, overdraft) {
        let account3 = new CheckingAccount(number, overdraft);
        this._accounts.push(account3);
        return account3.getNumber();
    }
    closeAccount(number) {
        this.accounts.filter((account) => {
            account.getNumber() !== number;
        });
    }
    accountReport() {
        this._accounts.forEach((account) => {
            console.log(account.toString());
        });
    }
    endOfMonth() {
        this._accounts.forEach((account) => {
            console.log(account.endOfMonth());
        });
    }
}

let bank = new Bank();
bank.addAccount(1);
bank.addCheckingAccount(2, 200);
bank.addSavingAccount(3, 5);
bank.accountReport();
bank.endOfMonth();
