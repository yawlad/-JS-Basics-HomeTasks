
    const getPopularData = () => {
        let data = [];
        catalog.forEach(product => {
            if (product.isPopular){
                data.push(product);
            }
        });
        return data;
    }
    
    const setPopular = (productsList) => {
        const cards = document.querySelector('.popular .cards');
        productsList.forEach(pr => {
            cards.insertAdjacentElement('beforeend', createCardElement(pr));
        });
    }
    
    
    
    setPopular(getPopularData());


