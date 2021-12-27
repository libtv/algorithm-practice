let tree = [0, [2, 3, 4], [5, 6], 0, [7], 0, 0, 0];

console.log(diameter(1));

function diameter(root) {
    let arr = tree[root];

    let [a, b, ...c] = arr
        .map((val, idx) => {
            return idxSum(val, 1);
        })
        .sort((a, b) => b - a);

    return a + b;
}

function idxSum(idx, sum) {
    if (tree[idx] == 0) {
        return sum;
    } else {
        if (tree[idx].length > 1) {
            return Math.max(idxSum(tree[idx][0], sum + 1), idxSum(tree[idx][1], sum + 1));
        } else {
            return idxSum(tree[idx][0], sum + 1);
        }
    }
}
