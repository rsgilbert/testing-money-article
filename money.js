class Money {
    _fAmount;
    _fCurrency;

    constructor(amount, currency) {
        this._fAmount = amount;
        this._fCurrency = currency;
    }

    get amount() { return this._fAmount; }
    get currency() { return this._fCurrency; }
    /**
     * When you add two Money's of the same currency, the 
     * resulting Money has as its amount the sum of the other
     * two amounts.
     * @param {Money} money 
     */
    add(money) {
        return new Money(money.amount + this.amount, this.currency);
    }
    /** @param { Money } other  */
    equals(other) {
        // return false;
        return this.amount === other?.amount && this.currency === other?.currency;
    }
}

module.exports = Money;