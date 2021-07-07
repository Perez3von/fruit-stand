// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById } from '../utils.js';
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
