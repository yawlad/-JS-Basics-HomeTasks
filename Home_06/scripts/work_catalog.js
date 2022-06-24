
    const mainCatalog = document.querySelector('.main_catalog');
    const catalogCategories = document.querySelectorAll('.catalog_category');

    const filterByCategory = (category) => {
        rebuildCatalog();
        if (category == 'all_categories') {
            return;
        }
        mainCatalog.querySelectorAll('.product_card').forEach(card => {
            if (card.getAttribute('type') != category.toLowerCase()) {
                card.remove();
            }
        });
    }

    const rebuildCatalog = () => {
        mainCatalog.querySelectorAll('.product_card').forEach(card => card.remove());
        basketCards = document.querySelectorAll('.basket_card');
        basketCards.forEach(card => {
            card.remove();
        }); 
        setCatalog(catalog);
        createBasket();
    }

    catalogCategories.forEach(categoryButton => {
        categoryButton.addEventListener('click', () => filterByCategory(categoryButton.getAttribute("id")));
    });

    if (localStorage.getItem('category') != null) {
        filterByCategory(localStorage.getItem('category'));
        localStorage.removeItem('category');
    }


