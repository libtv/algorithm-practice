// 구간 트리
// 구간 트리의 합을 구하는 알고리즘

function findsum(x, y) {
    let arr = [5, 8, 6, 3, 2, 7, 2, 6];
    let tree = [];
    let arr_length = arr.length;

    createArr(arr);
    let fetch_arr = [];

    for (let i = x; i <= y; i++) {
        fetch_arr.push(i + arr_length);
    }

    let sum = fetch(fetch_arr).reduce((prev, current) => {
        return prev + tree[current];
    }, 0);
    return sum;

    function fetch(list) {
        let orderList = list.reduce((prev, current) => {
            if (prev.length == 0) {
                prev.push(current);
                return prev;
            }

            let pp = prev.pop();
            if (Array.isArray(pp)) {
                prev.push(pp);
                prev.push(current);
                return prev;
            }

            if (pp + 1 == current && current % 2 == 1) {
                let arr = [];
                arr.push(pp);
                arr.push(current);
                prev.push(arr);
            } else {
                prev.push(pp);
                prev.push(current);
            }

            return prev;
        }, []);

        orderList = resolveArr(orderList);

        if (recrusiveYN(orderList)) {
            return fetch(orderList);
        } else {
            return orderList;
        }

        function resolveArr(ar) {
            let myarr = ar.map((val) => {
                if (Array.isArray(val)) {
                    return val[0] / 2;
                } else {
                    return val;
                }
            });

            return myarr;
        }

        function recrusiveYN(list) {
            let YN = false;
            list.reduce((prev, current) => {
                if (prev.length == 0) {
                    prev.push(current);
                    return prev;
                }

                let pp = prev.pop();
                if (Array.isArray(pp)) {
                    prev.push(pp);
                    prev.push(current);
                    return prev;
                }

                if (pp + 1 == current && current % 2 == 1) {
                    let arr = [];
                    arr.push(pp);
                    arr.push(current);
                    prev.push(arr);
                    YN = true;
                } else {
                    prev.push(pp);
                    prev.push(current);
                }

                return prev;
            }, []);

            return YN;
        }
    }

    function arrSize(ar) {
        let size = 0;
        for (let x = Math.log(ar.length) / Math.log(2); x >= 1; x--) {
            size += 2 ** x;
        }
        return size + 1;
    }

    function createArr(ar) {
        let tree_length = arrSize(ar);

        for (let i = tree_length; i > 0; i--) {
            if (arr.length > 0) {
                let p = arr.pop();
                tree[i] = p;
            } else {
                let p = tree[i * 2] + tree[i * 2 + 1];
                tree[i] = p;
            }
        }
    }
}

let sum = findsum(2, 7);

console.log(sum);
