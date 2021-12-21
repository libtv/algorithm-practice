// 유니온 파잉ㄴ트 자료 구조 는 집합의 묶음을 관리하는 구조입니다.
// 여기서 집합은 서로소 집합으로 한 원소가 둘 이상의 집합에 속한 경우는 없다.

let arr = [];

arr[0] = [];
arr[0].push(0);

arr[1] = [];
arr[1].push(4);

arr[2] = [];

arr[3] = [];
arr[3].push(2);

arr[4] = [];

arr[5] = [];
arr[5].push(5);

arr[6] = [];
arr[6].push(3);

arr[7] = [];
arr[7].push(4);

arr[8] = [];
arr[8].push(3);

function unionfind(a, b) {
    // find 함수는 원소 x의 대푯값을 반환하는 함수
    let ar = find(a);
    let br = find(b);

    // notSame 함수는 원소 x 의 대표값이 같은지 확인하는 함수
    if (notSame(ar, br)) {
        // myUnion 함수는 대푯값중 작은 것을 큰 집합으로 속하게 하는 함수.
        myUnion(ar, br);
    }
}

function find(p) {
    let a = p;
    while (true) {
        if (arr[a].length > 0) {
            let result = arr[a].pop();
            arr[a].push(result);
            a = result;
        } else {
            break;
        }
    }
    return a;
}

function notSame(a, b) {
    if (a !== b) return true;
    return false;
}

function myUnion(a, b) {
    console.log(a);
    console.log(b);
    if (a > b) {
        arr[a].push(b);
    } else {
        arr[b].push(a);
    }
}

unionfind(1, 8);
console.log(arr);
