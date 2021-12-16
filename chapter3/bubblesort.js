let arr = [12, 45, 23, 16, 57, 42, 20, 6, 8];

function bubbleSort(myArr) {
    for (let i = 0; i < myArr.length; i++) {
        for (let j = i + 1; j < myArr.length; j++) {
            let temp = myArr[i];
            if (myArr[i] > myArr[j]) {
                myArr[i] = myArr[j];
                myArr[j] = temp;
            }
        }
    }

    return myArr;
}

console.log(...bubbleSort(arr));
