let a = -102;
let b = -320;

function task_03(a, b) {
    if (a >= 0 && b >= 0) {
        return a - b;
    } else if (a < 0 && b < 0){
        return a * b;
    } else {
        return a + b;
    }
}

console.log(task_03(a, b));