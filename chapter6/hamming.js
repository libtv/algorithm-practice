// 길이가 같은 두 문자열 a와 b사이의 해밍 거리를 나타냅니다.
// 비트 연산을 이용하여 for문 보다 더 빠르게 연산되도록 하였습니다.

function hamming(a, b) {
    let xor_a = parseInt(a, 2);
    let xor_b = parseInt(b, 2);
    let result = xor_a ^ xor_b;
    result = result.toString(2);

    return [padding(result), checkOne(result)];
}

function padding(r) {
    for (let i = 0; i < 5 - r.length; i++) {
        r = "0" + r;
    }
    return r;
}

function checkOne(r) {
    let idx = 0;
    for (let i = 0; i < r.length; i++) {
        if (r[i] == "1") idx++;
    }
    return idx;
}

let a = "00111";
let b = "01101";

let result = hamming(a, b);
console.log(result);
