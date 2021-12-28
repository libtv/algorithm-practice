let tree = [0, [2, 3, 4, 5], [6], 0, [7, 8, 9], 0, 0, 0, 0, 0];
let traversalArr = [1];
let subtreeArr = [];
let nodeValueArr = [2, 3, 4, 5, 3, 4, 3, 1, 1];

function tree2Array(myTree) {
    if (Array.isArray(myTree)) {
        for (const iter of myTree) {
            traversalArr.push(iter);
            tree2Array(tree[iter]);
        }
    }
}

function dfs() {
    function tree2Sub(myTree) {
        let sum = 0;
        if (!Array.isArray(myTree)) {
            return 1;
        }

        sum += elementSum(myTree);
        return sum + 1;
    }

    function elementSum(tr) {
        let sum = 0;

        if (!Array.isArray(tr)) return sum;

        for (let i = 0; i < tr.length; i++) {
            let idx = tr[i];
            sum += elementSum(tree[idx]) + 1;
        }

        return sum;
    }

    for (let i = 0; i < traversalArr.length; i++) {
        subtreeArr.push(tree2Sub(tree[traversalArr[i]]));
    }
}

function subNodeSum(node) {
    let sumStart = [];
    let sum = 0;
    for (let i = 0; i < traversalArr.length; i++) {
        if (traversalArr[i] == node) {
            sumStart.push(subtreeArr[i]);
            sumStart.push(i);
            break;
        }
    }

    let idx = sumStart.pop();
    let idxLength = sumStart.pop();

    for (let i = idx; i < idx + idxLength; i++) {
        sum += nodeValueArr[i];
    }

    return sum;
}

tree2Array(tree[1]);
dfs();

console.log(traversalArr);
console.log(subtreeArr);
console.log(nodeValueArr);

console.log(`구하려는 값은?  ${subNodeSum(4)}`);
