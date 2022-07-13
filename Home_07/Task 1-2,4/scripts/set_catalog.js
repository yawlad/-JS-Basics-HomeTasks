
    const setCatalog = (productsList) => {
        const main_catalog = document.querySelector('.main_catalog');
        productsList.forEach(pr => {
            const prCard = createCardElement(pr)
            switch(pr.type.toLowerCase()) {
                case 'smartphone':
                    prCard.setAttribute("type", 'smartphone');
                    break;
                case 'note':
                    prCard.setAttribute("type", 'note');
                    break;
                case 'notebook':
                    prCard.setAttribute("type", 'notebook');
                    break;
                case 'computer':
                    prCard.setAttribute("type", 'computer');
                    break;
                case 'server':
                    prCard.setAttribute("type", 'server');
                    break;
            }
            main_catalog.insertAdjacentElement('beforeend', prCard);
        });
    }

    


    setCatalog(catalog);
    
