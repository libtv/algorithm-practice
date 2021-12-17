// 격자상의 경로

let arr = [
    [3, 7, 9, 2, 7],
    [9, 8, 3, 5, 5],
    [1, 7, 9, 8, 5],
    [3, 8, 6, 4, 10],
    [6, 3, 9, 7, 8],
];

function pathOnGrid(arr) {
    let right = 0;
    let down = 0;

    let goRight = (i) => {
        return i + 1;
    };
    let goDown = (j) => {
        return j + 1;
    };

    let result = (i, j) => {
        return arr[i][j];
    };

    for (;;) {
        console.log(result(right, down));
        if (right == 4 && down == 4) {
            return;
        }
        let myDown = result(right, goDown(down));
        let myRight = result(goRight(right), down);

        if (myDown > myRight) {
            down++;
        } else {
            right++;
        }
    }
}

pathOnGrid(arr);
