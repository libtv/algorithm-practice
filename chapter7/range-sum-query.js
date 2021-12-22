let arr = [1, 3, 4, 8, 6, 1, 4, 2];

function sum(a, b) {
    let sum = 0;

    for (let i = a; i <= b; i++) {
        sum += arr[i];
    }

    return sum;
}

function sumArr(a, b) {
    return sum(0, b) - sum(0, a);
}

console.log(sumArr(2, 6));
