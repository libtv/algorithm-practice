let tree = [0, [2, 3, 4], [1, 5, 6], [1], [1], [2], [2]];

function process(target) {
    let maxSize = tree[target]
        .map((val) => {
            return maxLength(val, [target, val]);
        })
        .sort((a, b) => b - a);
    console.log(maxSize[0]);
}

function maxLength(idx, arr) {
    let myTree = tree[idx].filter((val) => {
        let result = arr.map((val2) => {
            if (val !== val2) {
                return true;
            } else {
                return false;
            }
        });

        return result.every((val) => {
            return val == true;
        });
    });

    if (myTree.length == 0) {
        return arr.length - 1;
    } else {
        if (myTree.length > 1) {
            return Math.max(maxLength(myTree[0], [myTree[0], ...arr]), maxLength(myTree[1], [myTree[1], ...arr]));
        } else {
            return maxLength(myTree[0], [myTree[0], ...arr]);
        }
    }
}

process(6);
