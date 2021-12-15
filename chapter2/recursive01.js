/**
    부분 집합 생성하기
**/

let array = [];
function totalArray(idx) {
    array.push([0]);
    for (let i = 1; i <= idx; i++) {
        array.push([i]);
        if (i === idx) {
            return;
        } else {
            recrusive(i, idx, [i]);
        }
    }
}

function recrusive(i, max, myarr) {
    for (let j = i + 1; j <= max; j++) {
        let arr = [...myarr, j];
        array.push(arr);
        recrusive(j, max, arr);
    }
}

totalArray(22);
console.log(array);
