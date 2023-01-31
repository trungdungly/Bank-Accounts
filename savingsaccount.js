class SavingAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }
    getInterest() {
        return this._interest;
    }
    setInterest(interest) {
        this._interest = interest;
    }
    addInterest() {
        let amount = (this._balance * this._interest) / 100;
        super.deposit(amount);
    }
    toString() {
        return super.toString() + "\nInterest: " + this._interest;
    }
    endOfMonth() {
        this.addInterest();
        return (
            "This month " +
            this.getInterest() +
            "% was applied to account number:  " +
            super.getNumber()
        ); // does nothing
    }
}
