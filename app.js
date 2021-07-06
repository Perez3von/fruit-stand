import fruits from './fruits.js';
import { renderFruit } from './render-fruit.js';
console.log(fruits);

// PSEUDO CODE FOR RENDERING EACH FRUIT
// grab the ul element (using document.getElementById)
// call renderFruit on each fruit in fruits
// append the li to the ul
const fruitsUL = document.getElementById('fruits');

{/* <li>
        <h3>Red Apple</h3>
        <img src="./assets/apple.png" alt="Red Apple">
        <span>$1.00</span>
        <button>Add to Cart</button>
    </li> 
*/}
for (let fruit of fruits) {
    const fruitLI = renderFruit(fruit);
    fruitsUL.appendChild(fruitLI);
}



