// 숫자 8개의 한에서

let arr = [];
let array = [21, 10, 12, 20, 25, 13, 15, 22];

function mergeSort(array) {
    // 1. 2갈래로 나눈다.
    let center = array.length / 2;
    let [a, b] = [array.slice(0, center), array.slice(center, array.length)];

    let solted1 = recrusive(a);
    let solted2 = recrusive(b);

    let [sorted1, sorted2] = recrusiveSorted(solted1, solted2);

    arr.push(...sorted1);
    arr.push(...sorted2);

    arr.sort((a, b) => {
        return a - b;
    });
}

function recrusive(arr) {
    let myArr = [];

    if (arr.length <= 2) {
        arr.sort((a, b) => {
            return a - b;
        });
        myArr.push(arr);
        return myArr;
    } else {
        let center = arr.length / 2;

        let [a, b] = [arr.slice(0, center), arr.slice(center, arr.length)];

        let cb1 = recrusive(a);
        let cb2 = recrusive(b);

        myArr.push(...cb1);
        myArr.push(...cb2);

        return myArr;
    }
}

function recrusiveSorted(arr1, arr2) {
    let myArr = [],
        myArr2 = [];
    for (let i = 0; i < arr1.length / 2; i = i + 2) {
        myArr.push(...arr1[i]);
        myArr.push(...arr1[i + 1]);
        myArr.sort((a, b) => {
            return a - b;
        });
    }

    for (let i = 0; i < arr2.length / 2; i = i + 2) {
        myArr2.push(...arr2[i]);
        myArr2.push(...arr2[i + 1]);
        myArr2.sort((a, b) => {
            return a - b;
        });
    }

    if (myArr.length < 1 || myArr2.length < 1) {
        return recrusiveSorted(myArr, myArr2);
    } else {
        return [myArr, myArr2];
    }
}

mergeSort(array);
console.log(arr);
