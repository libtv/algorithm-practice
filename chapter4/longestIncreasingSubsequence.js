// LIS algorithm

let arr = [6, 2, 5, 1, 7, 4, 8, 3];

function lis(arr, idx) {
    let myArr = [arr[idx]];
    for (let i = idx + 1; i < arr.length; i++) {
        let searchNumber = myArr[myArr.length - 1];

        for (let j = i; j < arr.length; j++) {
            if (searchNumber < arr[j]) {
                myArr.push(arr[j]);
                i = j;
                break;
            }
        }
    }
    return myArr;
}

console.log(lis(arr, 1));
