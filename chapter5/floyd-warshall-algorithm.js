let arr = [];
let INF = 99999;
arr[0] = [0, 5, INF, 9, 1];
arr[1] = [5, 0, 2, INF, INF];
arr[2] = [INF, 2, 0, 7, INF];
arr[3] = [9, INF, 7, 0, 2];
arr[4] = [1, INF, INF, 2, 0];

function floyd() {
    for (let a = 0; a < 5; a++) {
        for (let b = 0; b < 5; b++) {
            for (let c = 0; c < 5; c++) {
                arr[b][c] = Math.min(arr[b][c], arr[a][b] + arr[a][c]);
            }
        }
    }
}

floyd();
console.log(arr);
