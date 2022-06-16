const basketObject = {
    'products': [],
    'total price': function() {
        if (this.products.length === 0) {
            return 0;
        } else {
            return this.products.reduce( (acc, next) => acc + next['price']*next['num'], 0);
        }
    }
};

function addProductToBasket(name, price, num) {
    const product = {
        name,
        price,
        num
    }
    basketObject.products.push(product);
}

function generateBasket() {
    const basket = document.createElement('div');
    basket.classList.add('basket');
    let totalPrice = basketObject['total price']();
    let amount = basketObject.products.reduce( (acc, next) => 
        acc + next['num'], 
        0 );
    if (totalPrice === 0) {
        basket.insertAdjacentHTML(`afterbegin`, 
        `<p class = "text"> Is Empty </p>`)
    } else {
        basket.insertAdjacentHTML(`afterbegin`, 
        `<p class = "text"> The number of products: ${amount} </p>
        <p class = "text"> Total price: ${totalPrice} </p>`)
    }
    document.body.appendChild(basket);
}

addProductToBasket('pr1', 100, 5);
addProductToBasket('pr2', 150, 1);
addProductToBasket('pr3', 30, 10);
addProductToBasket('pr4', 1530, 1);
addProductToBasket('pr5', 250, 5);

generateBasket();

///////////////////////////////////////////////////////////////

const catalogObject = [];

function addProductToCatalog(name, price, description) {
    const product = {
        name,
        price,
        description
    }
    catalogObject.push(product);
}

function generateCatalog() {
    const catalog = document.createElement('div');
    catalog.classList.add('catalog');
    for (let item of catalogObject) {
        catalog.insertAdjacentElement(`afterbegin`, createCatalogElement(item));
    }
    document.body.insertAdjacentElement(`beforeend`, catalog);
}

function createCatalogElement(product) {
    const element = document.createElement('div');
    element.classList.add('catalog_element');

    const elementName = document.createElement('h4');
    elementName.classList.add('element_name');
    elementName.textContent = `${product.name}`;
    element.insertAdjacentElement(`beforeend`, elementName);

    const elementDecription = document.createElement('p');
    elementDecription.classList.add('element_description');
    elementDecription.textContent = `${product.description}`;
    element.insertAdjacentElement(`beforeend`, elementDecription);

    const elementPrice = document.createElement('p');
    elementPrice.classList.add('element_price');
    elementPrice.textContent = `${product.price}`;
    element.insertAdjacentElement(`beforeend`, elementPrice);

    return element;
}

addProductToCatalog('pr1', 100, 'desc1');
addProductToCatalog('pr2', 300, 'desc2');
addProductToCatalog('pr3', 500, 'desc3');
addProductToCatalog('pr4', 250, 'desc4');
addProductToCatalog('pr5', 30, 'desc5');
addProductToCatalog('pr6', 3000, 'desc6');

generateCatalog();