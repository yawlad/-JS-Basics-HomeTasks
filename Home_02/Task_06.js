function sum(a, b) {
    return a + b;
}
function min(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'sum':
            return sum(arg1, arg2);
        case 'min':
            return min(arg1, arg2);
        case 'mul':
            return mul(arg1, arg2);
        case 'div':
            return div(arg1, arg2);
    }
}