
/**
 * We use class inheritence rather than type inheritance
 * since javascript does not support interfaces.
 * @abstract
 */
class AbstractMoney {
    /**
     * @abstract
     * @returns { AbstractMoney } 
     **/
    add(abstractMoney) { return; }
    /**
     * @abstract
     * @returns { AbstractMoney }
     */
    addMoney(money) { return; }
    /**
     * @abstract
     * @returns { AbstractMoney } 
     **/
    addMoneyBag(moneyBag) { return; }
    /** 
     * @abstract
     * @returns { boolean }
     */
    equals(abstractmoney) { return; }
}


module.exports = AbstractMoney;