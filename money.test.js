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
    });

    test('equals', () => {
        expect(m1.equals(null)).toBe(false);
        expect(m1).toBe(m1);
        expect(m2).toEqual(new Money(50, 'UGX'));
        assert(!m1.equals(m2));
        assert(m1.equals(new Money(12, 'UGX')));
    });
});