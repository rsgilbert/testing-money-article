const Money = require("./money");
const assert = require('assert');

describe('money', () => {
    test('simple add', () => {
        // Code which creates the objects we will interact
        // with during the test. Called a test fixture.
        let m1 = new Money(12, 'UGX');
        let m2 = new Money(50, 'UGX');
        let expected = new Money(62, 'UGX');
        // Code which exercises the objects in the fixture.
        let result = m1.add(m2);
        // Code which verifies the result.
        expect(result.amount).toBe(expected.amount);
        expect(result.currency).toBe(expected.currency);
    });

    test('equals', () => {
        let m1 = new Money(5, 'KE');
        let m2 = new Money(12, 'KE');
        expect(m1.equals(null)).toBe(false);
        expect(m1).toBe(m1);
        expect(m2).toEqual(new Money(12, 'KE'));
        assert(!m1.equals(m2));
        assert(m1.equals(new Money(5, 'KE')));
    });
})