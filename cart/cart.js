import { findById, getTotal, renderTableRow, toUSD } from '../utils.js';
import fruits from '../data/fruits.js';
import cart from '../data/cart.js';

const tableBody = document.getElementById('table-body');

// loop through each item in cart
// find its associated fruit using findById
// get its <tr> using renderTableRow
// append <tr> to the tableBody element

for (let item of cart) {
    const fruit = findById(fruits, item.id);
    const tr = renderTableRow(fruit, item);
    tableBody.appendChild(tr);
}

const totalDom = document.getElementById('order-total');
const total = getTotal(fruits, cart);
totalDom.textContent = toUSD(total);