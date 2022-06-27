


const resultProductsNum = document.querySelector('.result_products_num');
const resultPrice = document.querySelector('.result_price');
const orderCards = document.querySelector('.order_cards');

const createOrder = () => {
    const fastOrder = JSON.parse(localStorage.getItem('fast_order'));
    if (fastOrder != null) {
        createOrderCard(fastOrder);
        localStorage.removeItem('fast_order');
        return;
    }

    basketItems.forEach(basketItem => {
            createOrderCard(basketItem);
        });
        resultProductsNum.textContent = `Всего товаров: ${basketItems.length}`;
        resultPrice.textContent = `Заказ на сумму: ${getTotalPrice()} byn`;
    }

    const createOrderCard = (product) => {
        const productHtml = `
        <div class="product_card" id = "${product.id}">
            <a href="../pages/product.html" class="product_link_img text"><img class="card_img" src="..${product.imagePath}"></a>
            <div class="product_card_text_content">
                <a href="../pages/product.html" class="product_link card_head text"><span class="card_head">${product.name}</span></a>
                <div class="description text">
                    ${product.description}
                </div>
                <div>
                    <span class="card_price">${product.price} byn</span><br><span class="old_price card_price big_card_price">${product.oldPrice} byn</span>
                </div>
                <div class="buttons">
                    <button class="basket_remove_button card_button text ">Удалить из корзины</button>
                </div>
            </div>              
        </div>
        `;
        orderCards.insertAdjacentHTML('afterbegin',productHtml);
        const removeFromOrderButton = orderCards.querySelector('.basket_remove_button');
        removeFromOrderButton.addEventListener('click', () => {
            let id = removeFromOrderButton.parentElement.parentElement.parentElement.id;
            removeFromBasket(searchBasketCardById(id));
            removeFromOrder(removeFromOrderButton.parentElement.parentElement.parentElement);
            removeFromBasketItemsById(id);
        });
        document.querySelector('.product_link_img').addEventListener('click', () => {
            localStorage.setItem('product_info', JSON.stringify(product));
        });
        document.querySelector('.product_link').addEventListener('click', () => {
            localStorage.setItem('product_info', JSON.stringify(product));
        });
            
        resultProductsNum.textContent = basketItems.length;
    }

    const removeFromOrder = (element) => {
        for (let i = 0; i < basketItems.length; i++) {
            
            if (element.id == basketItems[i].id) {
                
                element.id = -1;
                element.style.transition = "2s";
                element.style.height = "0px";
                element.style.minHeight = "0px";
                element.style.padding = "0px";
                element.style.margin = "0px";
                element.style.overflow = "hidden";
                setTimeout(() => element.remove(), 2000);
                
                
                
                return;
            }
        }
    }

    const searchOrderCardById = (id) => {
        const productCards = document.querySelectorAll('.product_card');
        for (let i = 0; i < productCards.length; i++) {
            if (productCards[i].id == id) {
                console.log(basketItems);
                return productCards[i];
            }
        }
    };
    
    createOrder();

