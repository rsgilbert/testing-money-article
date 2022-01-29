const Money = require('./money');
const MoneyBag = require('./moneybag')


describe('moneybag', () => {
    let m1 = new Money(10, 'UGX');
    let m2 = new Money(20, 'UGX');
    let m3 = new Money(30, 'UGX');
    let m4 = new Money(40, 'UGX');
    let mb1;
    let mb2;

    beforeEach(() => {
        mb1 = new MoneyBag(m1, m2);
        mb2 = new MoneyBag(m3, m4);
    });

    test('moneybag created', () => {
        expect(mb1).not.toBe(null);
        expect(mb1).not.toBe(undefined);
    })
    test('tt', () =>{})
})