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
        monies.forEach.call(this, this.appendMoney);
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
}

module.exports = MoneyBag;