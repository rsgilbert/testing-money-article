const Money = require('./money');
const MoneyBag = require('./moneybag');
const { describe, test, expect, beforeEach } = require('@jest/globals');


describe('moneybag', () => {
    let m1 = new Money(10, 'UGX');
    let m2 = new Money(20, 'UGX');
    let m3 = new Money(30, 'USD');
    let m4 = new Money(40, 'USD');
    let mb1, mb2, mb3;

    beforeEach(() => {
        mb1 = new MoneyBag(m1, m2);
        mb2 = new MoneyBag(m3, m4);
        mb3 = new MoneyBag(m1, m3);
    });

    test('moneybag created', () => {
        expect(mb1).not.toBe(null);
        expect(mb1).not.toBe(undefined);
        expect(mb1._monies.length).not.toBe(0);
    });

    test('money bag combines same currency monies', () => {
        expect(mb1._monies).toHaveLength(1);
    })

    test('money bag has multiple monies', () => {
        expect(mb3._monies).toHaveLength(2);
    });


    test('equals', () =>{
        expect(mb1.equals(mb1)).toBe(true);
        expect(mb1.equals(null)).toBe(false);
        expect(mb1.equals(mb2)).toBe(false);
        expect(mb2.equals(mb2)).toBe(true);
    })
})