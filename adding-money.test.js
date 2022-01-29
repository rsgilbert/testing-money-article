const Money = require("./money");
const { describe, test, expect, beforeEach } = require('@jest/globals');
const MoneyBag = require("./moneybag");


describe('adding money', () => {
    let m1, m2, m3, m4, m5, m6, m7, m8, m9;
    let mb1, mb2, mb3, mb4, mb5;

    beforeEach(() => {
        m1 = new Money(1 ,'USD');
        m2 = new Money(2, 'UGX');
        m3 = new Money(3 ,'USD');
        m4 = new Money(4, 'UGX');
        m5 = new Money(6, 'UGX');
        m6 = new Money(4, 'USD');
        m7 = new Money(6, 'USD');
        
        mb1 = new MoneyBag(m1, m2, m3);
        mb2 = new MoneyBag(m2, m4);
        mb3 = new MoneyBag(m1, m2);
        mb4 = new MoneyBag(m3);
        mb5 = new MoneyBag(m1, m2, m3, m1);
    })

    test('same currency add', () => {
        expect(m1.add(m3).equals(m6)).toBe(true);
        expect(m1.add(m3).equals(m4)).toBe(false);
    });

    describe('mixed currency add', () => {
        test('money.add(moneybag)', () => {
            expect(m1.add(mb1).equals(mb5)).toBe(true);
        });
        test('moneybag.add(money)', () => {
            expect(mb3.add(m3).equals(mb1)).toBe(true);
        });
    })
});
