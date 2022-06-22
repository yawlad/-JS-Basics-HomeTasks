function popular() {
    const getData = () => {
        let data = [];
        catalog.forEach(product => {
            if (product.isPopular){
                data.push(product);
            }
        });
        return data;
    }
    
    const setPopular = (productsList) => {
        productsList.forEach(pr => {
            const cards = document.querySelector('.popular .cards');
            cards.insertAdjacentElement('beforeend', createCardElement(pr));
        });
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
        card_price.textContent = `${product.price} Br`;
    
        const card_old_price = document.createElement('span');
        card_old_price.classList.add('old_price', 'card_price');
        card_old_price.textContent = `${product.oldPrice} Br`;
    
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
    
    setPopular(getData());
}

popular();