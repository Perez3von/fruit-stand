export function findById(items, id){
    // loop through the items
    // if item's id is equal to the id parameter
    //   return the item
    for (const item of items){
        if (item.id === id) {
            return item;
        }
    }
}

export function toUSD(number) {
    return number.toLocaleString(
        'en-US', { style: 'currency', currency: 'USD' });
}

export function renderTableRow(fruitItem, cartItem){
    // return <tr> element with all the info we need
    // <tr>
    //     <td>Apple</td>  
    //     <td>$1.00 (from fruits.js)</td>
    //     <td>2 (from cart.js)</td>
    //     <td>$4.00 (calculated)</td>
    // </tr>
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = fruitItem.name;
    tr.appendChild(tdName);
    
    const tdPrice = document.createElement('td');
    tdPrice.textContent = toUSD(fruitItem.price);
    tr.appendChild(tdPrice);
    
    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    tr.appendChild(tdQty);

    const tdTotal = document.createElement('td');
    const total = fruitItem.price * cartItem.qty;
    tdTotal.textContent = toUSD(total);
    tr.appendChild(tdTotal);

    return tr;

}

export function getTotal(fruits, cart){
    let orderTotal = 0;
    // // loop through the cart items
    // // get the associated fruit
    // // sum up the qty * price
    // // return the orderTotal
    for (let item of cart) {
        const fruit = findById(fruits, item.id);
        orderTotal += fruit.price * item.qty;
    }
    return orderTotal;
}