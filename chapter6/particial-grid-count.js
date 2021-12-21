// n * n 크기의 격자가 있는데, 각 지점에는 검은색(1) 또는 흰색(0)이 칠해져있다.
// 이때, 네 귀퉁이에 모두 검은색이 칠해져 인쓴 부분 격자의 개수를 구하여라

// let arr = [];
// arr[0] = [1, 1, 1, 1, 1];
// arr[1] = [0, 1, 1, 0, 0];
// arr[2] = [0, 1, 1, 0, 1];
// arr[3] = [0, 1, 1, 0, 1];
// arr[4] = [1, 1, 1, 1, 1];

function createArr(size) {
    let myArr = [];
    for (let i = 0; i < size; i++) {
        myArr[i] = [];
        for (let j = 0; j < size; j++) {
            let result = Math.floor(Number(Math.random() * 10)) % 2;
            myArr[i].push(result);
        }
    }

    return myArr;
}

let arr = createArr(10);

console.log(arr);
let newArr = [];

function particialGridCount() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = j + 1; k < arr[j].length; k++) {
                if (arr[i][j] == arr[i][k] && arr[i][j] == 1) {
                    newArr.push([j, k]);
                    // console.log(`[${i}][${j}] and [${i}][${k}]`);
                }
            }
        }
    }
}

let date = new Date();
console.log(date.getTime());
particialGridCount();
myNumberCheck();

function myNumberCheck() {
    let idx = 0;
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            let first = newArr[i][0];
            let second = newArr[i][1];

            let checkFirst = newArr[j][0];
            let checkSecond = newArr[j][1];

            if (first == checkFirst && second == checkSecond) {
                idx = idx + 1;
            }
        }
    }

    console.log(idx);

    let date2 = new Date();
    console.log(date2.getTime());
}
