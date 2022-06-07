let basket = {
    'products': [],
    'total price': 0
}

function addProductToBasket(prod) {
    basket.products.push(prod);
}

function countBasketPrice() {
    basket["total price"] = 0;
    for (let prod of basket.products) {
        basket["total price"] += prod.price;
    }
}

let product1 = {
    'name': 'product1',
    'price': 100
}
let product2 = {
    'name': 'product2',
    'price': 1000
}
let product3 = {
    'name': 'product3',
    'price': 550
}
addProductToBasket(product1);
addProductToBasket(product2);
addProductToBasket(product3);
countBasketPrice();
console.log(basket["total price"]);