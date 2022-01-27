const Money = require("./money");
const assert = require('assert');

describe('money', () => {
    let m1;
    let m2;
    beforeEach(() => {
        m1 = new Money(12, 'UGX');
        m2 = new Money(50, 'UGX');
    })
    test('simple add', () => {
        // Code which creates the objects we will interact
        // with during the test. Called a test fixture.
     
        let expected = new Money(62, 'UGX');
        // Code which exercises the objects in the fixture.
        let result = m1.add(m2);
        // Code which verifies the result.
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
})