
const infoProductCards = document.querySelector('.info_product_cards');

const createInfoProductCard = () => {
    const product = JSON.parse(localStorage.getItem('product_info'));
    console.log(15);
    const productHtml = `
    <div class="product_card" id = "${product.id}">
        <a class="product_link_img text"><img class="card_img" src="..${product.imagePath}"></a>
        <div class="product_card_text_content">
            <a class="product_link card_head text"><span class="card_head">${product.name}</span></a>
            <div class="description text">
                ${product.description}
            </div>
            <div>
                <span class="card_price">${product.price} byn</span><br><span class="old_price card_price big_card_price">${product.oldPrice} byn</span>
            </div>
        </div>              
    </div>
    `;
    infoProductCards.insertAdjacentHTML('afterbegin',productHtml);
    
}

createInfoProductCard();