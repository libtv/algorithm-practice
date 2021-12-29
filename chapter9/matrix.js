let a = [];
a.push([6, 13, 7, 4]);
a.push([7, 0, 8, 2]);
a.push([9, 5, 4, 18]);

function transpose() {
    let b = [];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (isUndefined(j, b)) b[j] = [];
            b[j].push(a[i][j]);
        }
    }

    return b;

    function isUndefined(idx, b) {
        if (typeof b[idx] == "undefined") return true;
        return false;
    }
}

console.log(transpose());
