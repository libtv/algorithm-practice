// 해의 개수 찾기
let coins = [1, 3, 4];
let x = 5;
let array = [];

function numberOfSolution(x) {
    for (const i in coins) {
        recrusive(coins[i], [coins[i]], x);
    }
}

function recrusive(sum, arr, max) {
    for (let i = 0; i < coins.length; i++) {
        let elem = coins[i];

        let myArr = [];

        let newSum = sum + elem;
        myArr = [...arr];
        myArr.push(elem);

        if (newSum === max) {
            array.push(myArr);
        } else if (newSum <= max) {
            recrusive(newSum, myArr, max);
        }
    }
}

numberOfSolution(x);
console.log(array);
