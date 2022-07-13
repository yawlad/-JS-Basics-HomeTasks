


const addToBasketButtons = document.querySelectorAll('.to_basket');
const basketBottom = document.querySelector('.basket_bottom');
const numberOfProduct = document.querySelector('.number_of_products');
const totalPrice = document.querySelector('.total_price');
const basketImages = document.querySelector('.basket_images');
let deleteBusketButton = document.querySelector('.delete_busket');


const createBasket = () => {
    setBasketBottom();
    basketItems.forEach(basketItem => {
        setBasketCard(basketItem);
    });
    numberOfProduct.textContent = basketItems.length;
    totalPrice.textContent = `${getTotalPrice()} byn`;
}

const setBasketCard = (product) => {
    const productHtml = `
        <div class="basket_card" id = "${product.id}">
            <div class="basket_card_product">
                <a href="../pages/product.html" class="basket_card_image scale"><img src="..${product.imagePath}" alt="" class="basket_card_image"></a>
                <div class="info ">
                    <a href="../pages/product.html" class="basket_name">${product.name}</a>
                    <div class="basket_price">${product.price} byn</div>
                </div>
            </div>
            <button class="basket_remove_button">Убрать из корзины</button>
        </div>
        `;
    document.querySelector('.basket_cards').insertAdjacentHTML('afterbegin', productHtml);
    const removeFromBasketButton = document.querySelector('.basket_remove_button');
    removeFromBasketButton.addEventListener('click', () => {
        let id = removeFromBasketButton.parentElement.id;
        try {
            removeFromOrder(searchOrderCardById(id));
        }
        catch {

        }
        removeFromBasket(removeFromBasketButton.parentElement);
        removeFromBasketItemsById(id);

    });
    document.querySelector('.basket_card_image').addEventListener('click', () => {
        localStorage.setItem('product_info', JSON.stringify(product));
    });
    document.querySelector('.basket_name').addEventListener('click', () => {
        localStorage.setItem('product_info', JSON.stringify(product));
    });
    numberOfProduct.textContent = basketItems.length;
}

const setBasketBottom = () => {
    if (basketItems.length != 0) {
        const innerBasketBottom = `
            <button class="delete_busket">Очистить<br>корзину</button>
            <a href="../pages/order.html"><button class="make_order">Оформить<br>заказ</button></a>
            `;
        basketBottom.innerHTML = innerBasketBottom;
        deleteBusketButton = document.querySelector('.delete_busket');
        deleteBusketButton.addEventListener('click', () => {
            for (let card of document.querySelectorAll('.basket_card')) {
                let cardId = card.id;
                removeFromBasket(card);
                try {
                    removeFromOrder(searchOrderCardById(cardId));
                }
                catch {

                }
                removeFromBasketItemsById(cardId);
            }
        });
    } else {
        const innerBasketBottom = `<div class="empty_basket_text">Корзина пуста</div>`;
        basketBottom.innerHTML = innerBasketBottom;
    }
};

const addToBasket = (product) => {

    basketItems.push(product);
    setBasketCard(product);

    setBasketBottom();

    localStorage.setItem('basketItems', JSON.stringify(basketItems));
    totalPrice.textContent = `${getTotalPrice()} byn`;
}

const removeFromBasket = (element) => {
    for (let i = 0; i < basketItems.length; i++) {

        if (element.id == basketItems[i].id) {
            element.id = -1;
            element.style.transition = "2s";
            element.style.height = "0px";
            element.style.minHeight = "0px";
            element.style.padding = "0px";
            element.style.overflow = "hidden";
            setTimeout(() => element.remove(), 2000);
            
            return;
        }
    }
}

const searchBasketCardById = (id) => {
    const basketCards = document.querySelectorAll('.basket_card');
    for (let i = 0; i < basketCards.length; i++) {
        if (basketCards[i].id == id) {

            return basketCards[i];
        }
    }
};

const getTotalPrice = () => {
    return basketItems.reduce((acc, next) => acc + Number(next.price), 0);
}

const moveToBasket = (element) => {
    let elementCopy = element.cloneNode(true);
    elementCopy.style.transition = "1.5s";
    elementCopy.style.position = 'fixed';

    elementCopy.style.zIndex = "3";
    document.querySelector('.main .wrapper').insertAdjacentElement('afterbegin', elementCopy);

    let coordsBegin = element.getBoundingClientRect();
    let coordsEnd = basketImages.getBoundingClientRect();

    elementCopy.style.top = `${coordsBegin.top - 10}px`;
    elementCopy.style.left = `${coordsBegin.left - 10}px`;

    setTimeout(() => {
        elementCopy.style.transform = `scale(0.01)`;
        elementCopy.style.top = `${coordsEnd.top - 90}px`;
        elementCopy.style.left = `${coordsEnd.left - 195}px`;
    }, 100);
    setTimeout(() => {
        elementCopy.remove();
    }, 1500);

}

addToBasketButtons.forEach(button => {
    button.addEventListener('click', () => {
        addToBasket(catalog[button.parentElement.parentElement.parentElement.id]);
        moveToBasket(button.parentElement.parentElement.parentElement);
    });
});

const removeFromBasketItemsById = (id) => {
    for (let i = 0; i < basketItems.length; i++) {
        if (id == basketItems[i].id) {
            basketItems.splice(i, 1);
            localStorage.setItem('basketItems', JSON.stringify(basketItems));

            numberOfProduct.textContent = basketItems.length;
            totalPrice.textContent = `${getTotalPrice()} byn`;
            try {
                resultProductsNum.textContent = `Всего товаров: ${basketItems.length}`;
                resultPrice.textContent = `Заказ на сумму: ${getTotalPrice()} byn`;
            } catch {

            }
            setBasketBottom();
            return;
        }
    }
}


createBasket();
