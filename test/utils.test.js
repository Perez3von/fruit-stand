// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById, getTotal, renderTableRow } from '../utils.js';
import fruits from '../data/fruits.js';

const test = QUnit.test;

test('returns item by ID', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const dogs = [{ id: 1, name: 'Benny' }, { id: 2, name: 'Finley' }];
    const expected = { id: 1, name: 'Benny' };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(dogs, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('returns fruits by id', expect => {
    const expected = {
        id: 6,
        name: 'Mango',
        image: 'mango.png',
        description: 'Rhymes with tango',
        category: 'tree-fruit',
        price: 7.50,
        cost: .12
    };
    const actual = findById(fruits, 6);

    expect.deepEqual(actual, expected);
});

test('renderTableRow returns a <tr> element', expect => {
    const apple = {
        id: 1,
        name: 'Red Apple',
        image: 'apple.png',
        description: 'A sweet, delicious, forbidden-to-some treat',
        category: 'tree-fruit',
        price: 1.00,
        cost: 0.25
    };
    const appleCart = {
        id: 1,
        qty: 2
    }
    const expected = `<tr><td>Red Apple</td><td>$1.00</td><td>2</td><td>$2.00</td></tr>`;
    const dom = renderTableRow(apple, appleCart);
    const html = dom.outerHTML;
    expect.equal(html, expected);
});

test('getTotal should return the total amount in the cart', expect=>{
    const cart = [
        { id: 1, qty: 4 },
        { id: 2, qty: 6 }
    ];
    const data = [{
        id: 1,
        price: 2
    },
    {
        id: 2, 
        price: 4
    }];

    const expected = 32;
    const actual = getTotal(data, cart);
    expect.equal(expected, actual)
})