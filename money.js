const AbstractMoney = require("./abs-money");
const MoneyBag = require("./moneybag");


/**
 * @extends AbstractMoney
 */
class Money extends AbstractMoney {
    _fAmount;
    _fCurrency;

    constructor(amount, currency) {
        super();
        this._fAmount = amount;
        this._fCurrency = currency;
    }

    get amount() { return this._fAmount; }
    get currency() { return this._fCurrency; }
    /**
     * We use double dispatch. We call a method on the argument with the 
     * name of the original method followed by the classname of the receiver.
     * @override
     * @param {AbstractMoney} money 
     * @returns { AbstractMoney }
     */
    add(money) {
        return money.addMoney(this);
        // if(money.currency === this.currency)
        //     return new Money(money.amount + this.amount, this.currency);
        // else 
        //     return new MoneyBag(this, money);
    }

    /**
     * 
     * @param {Money} money 
     * @return { AbstractMoney }
     */
    addMoney(money){

    }

    /** 
     * @override
     * @param { AbstractMoney } other  */
    equals(other) {
        // return false;
        return this.amount === other?.amount && this.currency === other?.currency;
    }
}

module.exports = Money;