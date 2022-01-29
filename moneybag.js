const AbstractMoney = require("./abs-money");
const Money = require("./money");


class MoneyBag extends AbstractMoney {
    /**
     * @type Money[]
     */
    _monies = [];

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
        let foundMoney = this._monies.find(m => m.currency === money.currency);
        if(foundMoney) {
            foundMoney.add(money);
        }
        else {
            this._monies.push(money);
        }

    }

    /**
     * @override
     * @param {*} moneybag 
     */
    equals(moneybag) {
        if(moneybag?._monies === this._monies)
            return true;
        else {
            return false;
        }
    }

    /**
     * Add money, argument could be Money or a MoneyBag
     * We use double dispatch. We call a method on the argument with the 
     * name of the original method followed by the classname of the receiver.
     * @override
     * @param {AbstractMoney} money
     * @returns IMoney
     */
    add(money) {
        return money.addMoneyBag(this);
    }
}

module.exports = MoneyBag;