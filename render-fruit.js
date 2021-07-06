export function renderFruit(fruit){
    const fruitLI = document.createElement('li');
    const fruith3 = document.createElement('h3');
    fruith3.textContent = fruit.name;
    
    const fruitImg = document.createElement('img');
    fruitImg.src = `./assets/${fruit.image}`;
    fruitImg.alt = fruit.name;
    
    const fruitSpan = document.createElement('span');
    fruitSpan.textContent = `$${fruit.price}`;
    
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    
    fruitLI.appendChild(fruith3);
    fruitLI.appendChild(fruitImg);
    fruitLI.appendChild(fruitSpan);
    fruitLI.appendChild(button);

    return fruitLI;
}