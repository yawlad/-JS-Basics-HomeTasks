
    const getNewsData = () => {
        let data = [];
        catalog.forEach(product => {
            if (product.isNew){
                data.push(product);
            }
        });
        return data;
    }

    const setNews = (productsList) => {
        const cards = document.querySelector('.new_products .cards');
        productsList.forEach(pr => {
            cards.insertAdjacentElement('beforeend', createCardElement(pr));
        });
    }

    
    setNews(getNewsData());


