//  그리드 알고리즘으로 실패한 동전 교환 문제를 최적화로 찾는 알고리즘

let a = [1, 3, 4];
let dynamic = [0];
let infinite = 99999;
let n = 6;

function initIternal() {
    a.map((val) => {
        dynamic[val] = 1;
    });
}

function dynamicFunciton(n) {
    for (let i = 1; i <= n; i++) {
        if (dynamic[i] != undefined) {
            continue;
        } else {
            let col1 = dynamic[i - a[0]] + 1;
            let col2 = dynamic[i - a[1]] + 1;
            let col3 = dynamic[i - a[2]] + 1;

            col1 = Number.isNaN(col1) ? infinite : col1;
            col2 = Number.isNaN(col2) ? infinite : col2;
            col3 = Number.isNaN(col3) ? infinite : col3;
            let result = Math.min(col1, col2, col3);
            dynamic[i] = result;
        }
    }
}

initIternal();
dynamicFunciton(n);
console.log(dynamic[n]);
