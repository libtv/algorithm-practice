//  input  : arr, node
//  output : Max length

let a = [];
a = [
    [1, 3],
    [1, 4],
    [1, 2],
    [2, 5],
    [2, 6],
];

let b = [];
b = [
    [1, 3],
    [1, 4],
    [2, 5],
    [2, 6],
];

let maxArr = [];

function treeMaxLength(arr, node, distance) {
    if (distance == undefined) {
        distance = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == node) {
            let newarr = [];
            let newnode = arr[i][1];
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] != arr[j]) {
                    newarr.push(arr[j]);
                }
            }
            treeMaxLength(newarr, newnode, distance + 1);
        } else if (arr[i][1] == node) {
            let newarr = [];
            let newnode = arr[i][0];
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] != arr[j]) {
                    newarr.push(arr[j]);
                }
            }
            treeMaxLength(newarr, newnode, distance + 1);
        } else {
            maxArr.push(distance);
        }
    }
}

treeMaxLength(a, 2);
console.log(Math.max.apply(null, maxArr));
