let tree = [0, [2, 3, 4], [5, 6], 0, [7], 0, [8], 0, 0];

function lowestancestor(a, b) {
    let [myA, myB] = [a, b].sort((f, b) => f - b);
    let idx = 0;
    if (myA !== myB) {
        for (let i = 1; i < tree.length; i++) {
            if (
                Array.isArray(tree[i])
                    ? tree[i].some((val) => {
                          if (val == myB) return val;
                      })
                    : false
            )
                idx = i;
        }
        return lowestancestor(myA, idx);
    } else {
        return myA;
    }
}

console.log(lowestancestor(5, 8));
