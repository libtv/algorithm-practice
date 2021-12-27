let tree = [0, [2, 3, 4], [5, 6], 0, [7], 0, 0, 0];
let TREE_CHILD_BROTHER = 0;
let TREE_CHILD_SISTER = 1;

function diameter(root) {
    let arr = tree[root];

    let [a, b, ...rest] = arr
        .map((val) => {
            return idxSum(val, 1);
        })
        .sort((a, b) => b - a);

    return a + b;

    function idxSum(idx, sum) {
        if (tree[idx] === 0) {
            return sum;
        } else {
            if (tree[idx].length > 1) {
                return Math.max(idxSum(tree[idx][TREE_CHILD_BROTHER], sum + 1), idxSum(tree[idx][TREE_CHILD_SISTER], sum + 1));
            } else {
                return idxSum(tree[idx][0], sum + 1);
            }
        }
    }
}

let result = diameter(1);
console.log(result);
