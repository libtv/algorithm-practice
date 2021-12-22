let arr = [1, 3, 4, 8, 6, 1, 4, 2];
let idx = 0;

while (idx < 10000000) {
    arr.push(10);
    idx++;
}

function process(a, b) {
    let size = b - a + 1;
    let k = getMysize(size);

    let result = Math.min(getMinimumArr(a, a + k - 1), getMinimumArr(b - k + 1, b));
    return result;
}

function getMysize(size) {
    let maximum = 0;
    let n = 0;
    for (;;) {
        maximum = 2 ** n;

        if (size > maximum) {
            n++;
            continue;
        } else {
            --n;
            maximum = 2 ** n;
            break;
        }
    }
    return maximum;
}

function getMinimumArr(a, b) {
    let result = 99999;
    for (let i = a; i < b; i++) {
        result = Math.min(result, arr[i]);
    }
    return result;
}

console.log(process(1, 10000000));
