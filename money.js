const MoneyBag = require("./moneybag");

/**
 * @implements IMoney
 */
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
     * When you add two Moneys. If they have same currency, the 
     * resulting Money has as its amount the sum of the other
     * two amounts, else we return a MoneyBag containing the two moneys.
     * @param {Money} money 
     */
    add(money) {
        if(money.currency === this.currency)
            return new Money(money.amount + this.amount, this.currency);
        else 
            return new MoneyBag(this, money);
    }
    /** @param { IMoney } other  */
    equals(other) {
        // return false;
        return this.amount === other?.amount && this.currency === other?.currency;
    }
}

module.exports = Money;