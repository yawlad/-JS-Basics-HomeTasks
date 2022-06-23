

function basket() {
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
        <div class="basket_card" id = ${product.id}>
            <div class="basket_card_product">
                <a href="" class="basket_card_image scale"><img src="${product.imagePath}" alt="" class="basket_card_image"></a>
                <div class="info ">
                    <a href="" class="basket_name">${product.name}</a>
                    <div class="basket_price">${product.price} byn</div>
                </div>
        </div>
            <button class="basket_remove_button">Убрать из корзины</button>
        </div>
        `;
        document.querySelector('.basket_cards').insertAdjacentHTML('afterbegin',productHtml);
        const removeFromBasketButton = document.querySelector('.basket_remove_button');
        removeFromBasketButton.addEventListener('click', () => 
            removeFromBasket(removeFromBasketButton.parentElement));
        numberOfProduct.textContent = basketItems.length;
    }

    const setBasketBottom = () => {
        if (basketItems.length != 0) {
            const innerBasketBottom = `
            <button class="delete_busket">Очистить<br>корзину</button>
            <button class="make_order">Оформить<br>заказ</button>
            `;
            basketBottom.innerHTML = innerBasketBottom;  
            deleteBusketButton = document.querySelector('.delete_busket'); 
            deleteBusketButton.addEventListener('click', () => {
                document.querySelectorAll('.basket_card').forEach(card => {
                    removeFromBasket(card);
                });
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
        totalPrice.textContent = `${getTotalPrice()} BR`;
    }

    const removeFromBasket = (element) => {
        for (let i = 0; i < basketItems.length; i++) {
            if (element.id == basketItems[i].id) {
                basketItems.splice(i, 1);
                localStorage.setItem('basketItems', JSON.stringify(basketItems));
                element.style.transition = "2s";
                element.style.height = "0px";
                element.style.minHeight = "0px";
                element.style.padding = "0px";
                element.style.overflow = "hidden";
                setTimeout(() => element.remove(), 2000);
                  
                numberOfProduct.textContent = basketItems.length;
                totalPrice.textContent = `${getTotalPrice()} BR`;
                return;
            }
        }
    }

    const getTotalPrice = () => {
        return basketItems.reduce((acc, next) => acc + Number(next.price), 0); 
    }

    const moveToBasket = (element) => {
        let elementCopy = element.cloneNode(true);
        elementCopy.style.transition = "1.5s";
        elementCopy.style.position = 'fixed';
        
        elementCopy.style.zIndex = "3";
        document.body.insertAdjacentElement('afterbegin',elementCopy);
        
        let coordsBegin = element.getBoundingClientRect();
        let coordsEnd = basketImages.getBoundingClientRect();

        elementCopy.style.top = `${coordsBegin.top-10}px`;
        elementCopy.style.left = `${coordsBegin.left-10}px`;

        setTimeout(() => { 
            elementCopy.style.transform = `scale(0.01)`;
            elementCopy.style.top = `${coordsEnd.top-90}px`;
            elementCopy.style.left = `${coordsEnd.left-195}px`;
            }, 100);
        setTimeout(() => { 
            elementCopy.remove();
            }, 1500);
             
        }

    
    
    addToBasketButtons.forEach(button => {
        button.addEventListener('click', () => {
        addToBasket(catalog[button.parentElement.parentElement.parentElement.getAttribute("id")]);
        moveToBasket(button.parentElement.parentElement.parentElement);
        });
    });



    createBasket();
    
};

basket();
