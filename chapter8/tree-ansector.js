let arr = [0, [4, 5, 2], [6], 0, [3, 7], 0, 0, [8], 0];

function ancestor(x, k) {
    k = k - 1;
    let [result] = find();

    if (k <= 0) {
        return result;
    } else {
        return ancestor(result, k);
    }

    function find() {
        return arr
            .map((val, idx) => {
                if (Array.isArray(val)) {
                    let result = val.map((val2) => {
                        return x == val2 ? true : false;
                    });

                    if (result.some((val2) => val2 == true)) {
                        return idx;
                    }
                }
            })
            .filter((val2) => {
                return val2 != undefined;
            });
    }
}

console.log(ancestor(8, 3));
