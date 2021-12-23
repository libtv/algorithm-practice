// 2진 인덱스 트리

let arr = [0, 1, 3, 4, 8, 6, 1, 4, 2];

function process(x, y) {
    let myArr = [0];
    createArr();

    return sumFunc(y) - sumFunc(x);

    function createArr() {
        for (let k = 1; k < arr.length; k++) {
            let pk = k & -k;
            let sum = arr.reduce((prev, current, idx) => {
                if (idx >= k - pk + 1 && idx <= k) {
                    prev += current;
                }
                return prev;
            }, 0);
            myArr[k] = sum;
        }
    }

    function sumFunc(k) {
        let sum = 0;
        while (k >= 1) {
            sum += myArr[k];
            k -= k & -k;
        }
        return sum;
    }
}

console.log(process(4, 8));
