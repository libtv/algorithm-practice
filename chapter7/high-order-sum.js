let arr = [];
arr[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr[1] = [2, 1, 0, 1, 2, 3, 4, 5, 6];
arr[2] = [3, 2, 1, 0, 1, 2, 3, 4, 5];
arr[3] = [4, 3, 2, 1, 0, 1, 2, 3, 4];
arr[4] = [5, 4, 3, 2, 1, 0, 1, 2, 3];
arr[5] = [6, 5, 4, 3, 2, 1, 0, 1, 2];
arr[6] = [7, 6, 5, 4, 3, 2, 1, 0, 1];
arr[7] = [8, 7, 6, 5, 4, 3, 2, 1, 0];

let A = [7, 7];
let B = [4, 7];
let C = [7, 3];
let D = [4, 3];

function sum(x) {
    let [m, n] = x;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            sum += arr[i][j];
        }
    }

    return sum;
}

function highOrder(A, B, C, D) {
    return sum(A) - sum(B) - sum(C) + sum(D);
}

console.log(highOrder(A, B, C, D));
