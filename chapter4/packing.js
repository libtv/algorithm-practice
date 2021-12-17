// 짐 싸기
let arr = [1, 3, 3, 5];

function packing(n) {
    let sum = 0;
    for (;;) {
        if (arr.length == 0) return false;
        let p = arr.pop();

        if (p <= n - sum) {
            sum += p;
        }

        /* same result */
        if (sum === n) {
            return true;
        }
    }
}

console.log(packing(10));
