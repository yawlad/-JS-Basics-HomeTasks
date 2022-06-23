let catalogData = `[
    {
        "type": "SmartPhone",
        "name": "IPhoneX",
        "imagePath": "./images/IPhoneX.jpg",
        "price": "1899",
        "oldPrice": "2099",
        "isPopular": true,
        "isNew": false
    },
    {
        "type": "SmartPhone",
        "name": "IPhoneXX",
        "imagePath": "./images/IPhoneX.jpg",
        "price": "1699",
        "oldPrice": "1999",
        "isPopular": true,
        "isNew": false
    },
    {
        "type": "SmartPhone",
        "name": "IPhoneXXX",
        "imagePath": "./images/IPhoneX.jpg",
        "price": "2899",
        "oldPrice": "3499",
        "isPopular": false,
        "isNew": true
    },
    {
        "type": "SmartPhone",
        "name": "IPhoneXXXX",
        "imagePath": "./images/IPhoneX.jpg",
        "price": "3699",
        "oldPrice": "3999",
        "isPopular": false,
        "isNew": true
    },
    {
        "type": "Computer",
        "name": "Mac",
        "imagePath": "./images/monoblok_apple.png",
        "price": "8799",
        "oldPrice": "9999",
        "isPopular": true,
        "isNew": false
    },
    {
        "type": "Computer",
        "name": "MaMac",
        "imagePath": "./images/monoblok_apple.png",
        "price": "12999",
        "oldPrice": "14999",
        "isPopular": true,
        "isNew": true
    }]`;


let catalog = [];
let basketItems = [];

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }