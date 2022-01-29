const AbstractMoney = require("./abs-money");
const Money = require("./money");


class MoneyBag extends AbstractMoney {
    /**
     * @type Money[]
     */
    _monies = [];

    get monies() { return this._monies; }

    /**
     * 
     * @param  {...Money} monies 
     */
    constructor(...monies) {
        super();
        const self = this;
        for(let i = 0; i < monies.length; i++) {
            self.appendMoney(monies[i])
        }
    }

    /**
     * 
     * @param {Money} money 
     */
    appendMoney(money) {
        let foundMoneyIdx = this._monies.findIndex(m => m.currency === money.currency);
        if(foundMoneyIdx !== -1) {
            const newMoney = this._monies[foundMoneyIdx].add(money);
            this._monies[foundMoneyIdx] = newMoney;
        }
        else {
            this._monies.push(money);
        }
    }

    
    /**
     * @override
     * @param {MoneyBag} moneyBag 
     */
    equals(moneyBag) {
        return this._monies.every(thisMoney =>
            moneyBag?.monies?.some(otherMoney => 
                otherMoney.equals(thisMoney)
            )
        )
    }

    /**
     * Add money, argument could be Money or a MoneyBag
     * We use double dispatch. We call a method on the argument with the 
     * name of the original method followed by the classname of the receiver.
     * @override
     * @param {AbstractMoney} money
     * @returns {AbstractMoney}
     */
    add(money) {
        return money.addMoneyBag(this);
    }

    /**
     * @override
     * @param {Money} money 
     * @returns {AbstractMoney}
     */
    addMoney(money) {
        return new MoneyBag(money, ...this._monies);
    }

    /**
     * @override
     * @param {MoneyBag} moneyBag
     * @returns {AbstractMoney}
     */
    addMoneyBag(moneyBag) {
        return new MoneyBag(...moneyBag._monies, ...this._monies);
    }
}

module.exports = MoneyBag;