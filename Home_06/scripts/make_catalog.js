function make_catalog() {
    let id = 0;
    catalog = JSON.parse(catalogData);
    catalog.forEach(product => {
        product.id = id;
        id++;
    });
};

make_catalog();