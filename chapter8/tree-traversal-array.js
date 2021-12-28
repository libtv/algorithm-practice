let tree = [0, [2, 3, 4, 5], [6], 0, [7, 8, 9], 0, 0, 0, 0, 0];
let arr = [];

function tree2Array(myTree) {
    if (Array.isArray(myTree)) {
        for (const iter of myTree) {
            arr.push(iter);
            tree2Array(tree[iter]);
        }
    }
}

tree2Array(tree[1]);
console.log(arr);
