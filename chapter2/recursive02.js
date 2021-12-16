let array = [];

function permutation(idx, arr) {
    let excusionArr = [];

    for (let i = 1; i <= idx; i++) {
        let result = arr.every((val) => {
            if (i !== val) return val;
        });
        if (result === true) excusionArr.push(i);
    }

    if (excusionArr.length == 0) {
        return array.push(arr);
    }

    for (const key in excusionArr) {
        permutation(idx, [...arr, excusionArr[key]]);
    }
}

permutation(10, []);
console.log(array);
