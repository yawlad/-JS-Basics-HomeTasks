function power(val, pow) {
    while (pow > 0) {
        return val *= power(val, pow - 1);
    };
    return 1;
}

console.log(power(10, 3));