let catalogData = `[
    {
        "type": "SmartPhone",
        "name": "IPhoneX",
        "imagePath": "/images/IPhoneX.jpg",
        "price": "1899",
        "oldPrice": "2099",
        "isPopular": true,
        "isNew": false
    },
    {
        "type": "SmartPhone",
        "name": "IPhoneXX",
        "imagePath": "/images/IPhoneX.jpg",
        "price": "1699",
        "oldPrice": "1999",
        "isPopular": true,
        "isNew": false
    },
    {
        "type": "SmartPhone",
        "name": "IPhoneXXX",
        "imagePath": "/images/IPhoneX.jpg",
        "price": "2899",
        "oldPrice": "3499",
        "isPopular": false,
        "isNew": true
    },
    {
        "type": "SmartPhone",
        "name": "IPhoneXXXX",
        "imagePath": "/images/IPhoneX.jpg",
        "price": "3699",
        "oldPrice": "3999",
        "isPopular": false,
        "isNew": true
    },
    {
        "type": "Computer",
        "name": "Mac",
        "imagePath": "/images/monoblok_apple.png",
        "price": "8799",
        "oldPrice": "9999",
        "isPopular": true,
        "isNew": false
    },
    {
        "type": "Computer",
        "name": "MaMac",
        "imagePath": "/images/monoblok_apple.png",
        "price": "12999",
        "oldPrice": "14999",
        "isPopular": true,
        "isNew": true
    },
    {
        "type": "Computer",
        "name": "NewComp",
        "imagePath": "/images/monoblok_apple.png",
        "price": "15499",
        "oldPrice": "18999",
        "isPopular": false,
        "isNew": false
    },
    {
        "type": "Note",
        "name": "Ipad Pro",
        "imagePath": "/images/ipad.png",
        "price": "2499",
        "oldPrice": "2999",
        "isPopular": false,
        "isNew": false
    },
    {
        "type": "Note",
        "name": "Ipad Air",
        "imagePath": "/images/ipad.png",
        "price": "1499",
        "oldPrice": "1999",
        "isPopular": false,
        "isNew": false
    },
    {
        "type": "Notebook",
        "name": "Macbook Pro",
        "imagePath": "/images/macbook.jpg",
        "price": "3999",
        "oldPrice": "4999",
        "isPopular": false,
        "isNew": false
    },
    {
        "type": "Notebook",
        "name": "MacBook Air",
        "imagePath": "/images/macbook.jpg",
        "price": "5499",
        "oldPrice": "6599",
        "isPopular": false,
        "isNew": false
    },
    {
        "type": "Notebook",
        "name": "MacBook Air 2",
        "imagePath": "/images/macbook.jpg",
        "price": "7499",
        "oldPrice": "8999",
        "isPopular": true,
        "isNew": false
    }]`;


let catalog = [];

let basketItems = localStorage.getItem('basketItems') == null ? [] : JSON.parse(localStorage.getItem('basketItems'));

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  const createCardElement = (product) => {
    const card_img = document.createElement('img');
    card_img.classList.add('card_img');
    card_img.src = `${product.imagePath}`;

    const product_link_img = document.createElement('a');
    product_link_img.classList.add('product_link_img', 'text');
    product_link_img.insertAdjacentElement('beforeend',card_img);

    const card_head = document.createElement('span');
    card_head.classList.add('card_head');
    card_head.textContent = `${product.name}`;

    const product_link = document.createElement('a');
    product_link.classList.add('product_link', 'text');
    product_link.insertAdjacentElement('beforeend', card_head);

    const card_price = document.createElement('span');
    card_price.classList.add('card_price');
    card_price.textContent = `${product.price} byn`;

    const card_old_price = document.createElement('span');
    card_old_price.classList.add('old_price', 'card_price');
    card_old_price.textContent = `${product.oldPrice} byn`;

    const br = document.createElement('br');

    const div = document.createElement('div');
    div.insertAdjacentElement('beforeend',card_price);
    div.insertAdjacentElement('beforeend',br);
    div.insertAdjacentElement('beforeend',card_old_price);

    const to_basket = document.createElement('button');
    to_basket.classList.add('to_basket', 'card_button', 'text');
    to_basket.textContent = `В корзину`;

    const make_order = document.createElement('button');
    make_order.classList.add('make_order', 'card_button', 'text');
    make_order.textContent = `Быстрый заказ`;

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    buttons.insertAdjacentElement('beforeend', to_basket);
    buttons.insertAdjacentElement('beforeend', make_order);

    const product_card_text_content = document.createElement('div');
    product_card_text_content.classList.add('product_card_text_content');
    product_card_text_content.insertAdjacentElement('beforeend', product_link);
    product_card_text_content.insertAdjacentElement('beforeend', div);
    product_card_text_content.insertAdjacentElement('beforeend', buttons);

    const product_card = document.createElement('div');
    product_card.classList.add('product_card');
    product_card.insertAdjacentElement('beforeend', product_link_img);
    product_card.insertAdjacentElement('beforeend', product_card_text_content);
    product_card.setAttribute('id', product.id);
    
    return product_card;
}