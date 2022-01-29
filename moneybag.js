const Money = require("./money");

class MoneyBag {
    /**
     * @type Money[]
     */
    _monies = [];

    /**
     * 
     * @param  {...Money} monies 
     */
    constructor(...monies) {
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

    equals(moneybag) {
        if(moneybag?._monies === this._monies)
            return true;
        else {
            return false;
        }
    }
}

module.exports = MoneyBag;