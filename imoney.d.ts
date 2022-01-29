import Money from "./money";
import MoneyBag from "./moneybag";

interface IMoney {
    add(money: IMoney): IMoney;
    addMoney(money: Money) : IMoney;
    addMoneyBag(moneyBag: MoneyBag) : IMoney;
}
