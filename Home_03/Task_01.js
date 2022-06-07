let n = 3;
let k = 3;
let flag = false;
while (n <= 100) {
    flag = true;
    while (k < n/2) {
        if (n % k == 0){
            flag = false;
            break;
        }
        k++;
    }
    if (flag){
        console.log(n); 
    }
    k = 3;
    n += 2;
}