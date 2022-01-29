const Money = require("./money");
const assert = require('assert');
const { describe, test, expect, beforeEach } = require('@jest/globals');
const MoneyBag = require("./moneybag");


describe('money', () => {
    let m1;
    let m2;
    beforeEach(() => {
        m1 = new Money(12, 'UGX');
        m2 = new Money(50, 'UGX');
    })
    test('simple add', () => {
        let expected = new Money(62, 'UGX');
        let result = m1.add(m2);
        expect(result.amount).toBe(expected.amount);
        expect(result.currency).toBe(expected.currency);
    });

    test('equals', () => {
        expect(m1.equals(null)).toBe(false);
        expect(m1).toBe(m1);
        expect(m2).toEqual(new Money(50, 'UGX'));
        assert(!m1.equals(m2));
        assert(m1.equals(new Money(12, 'UGX')));
    });

    test.skip('mixed currency add', () => {
        // 2 USD + 3 UGX = [2 USD, 3 UGX]
        let m1 = new Money(2 ,'USD');
        let m2 = new Money(3, 'UGX');
        let expected = new MoneyBag(m1, m2);
        const result = m1.add(m2);
        // console.log(expected._monies, result._monies)
        expect(result).toBe(expected);
    })

})