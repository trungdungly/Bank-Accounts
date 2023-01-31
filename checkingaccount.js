class CheckingAccount extends Account {
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }
    getOverdraft() {
        return this._overdraft;
    }
    setOverdraft(overdraft) {
        this._overdraft = overdraft;
    }
    withdraw(amount) {
        if (super._balance - amount >= -this._overdraft) {
            throw Error("amount is exceeding the overdraft limit");
        } else {
            super._balance -= amount;
        }
    }
    toString() {
        return super.toString() + "\n" + "Overdraft Amount: " + this._overdraft;
    }
    endOfMonth() {
        if (super.balance > 0) {
            return this.toString();
        } else {
            return "Warning, low balance CheckingAccount " + this.toString();
        }
    }
}
