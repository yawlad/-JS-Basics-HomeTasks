
function converter(num) {
    if (num >= 0 && num <= 999) {
        
        return {
            'единицы': num % 10,
            'десятки': Math.floor(num/10) % 10 ,
            'сотни': Math.floor(num/100)
        }
    } else {
        console.log('Wrong input');
        return {};
    }
}

console.log(converter(199));