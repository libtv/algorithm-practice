let lineArr = [];
let trunks = [];

function createLine(start, end, weight) {
    let line = {
        trunk: {
            start: start,
            end: end,
        },
        weight: weight,
    };

    return line;
}

lineArr.push(createLine(5, 6, 2));
lineArr.push(createLine(1, 2, 3));
lineArr.push(createLine(3, 6, 3));
lineArr.push(createLine(1, 5, 5));
lineArr.push(createLine(2, 3, 5));
lineArr.push(createLine(2, 5, 6));
lineArr.push(createLine(4, 6, 7));
lineArr.push(createLine(3, 4, 9));

function kruskal(arr) {
    let line = lineArr.shift();

    if (lineArr.length == 0) return arr;

    if (arr.length > 0) {
        let trunk_arr = [];
        let index = 0;
        arr.map((val) => {
            let start = val.trunk.start;
            let end = val.trunk.end;

            let nothingInclude = trunk_arr.every((val2) => start != val2);
            if (nothingInclude) {
                trunk_arr.push(start);
            }

            let nothingInclude2 = trunk_arr.every((val2) => end != val2);
            if (nothingInclude2) {
                trunk_arr.push(end);
            }

            let nothingInclude3 = trunk_arr.every((val2) => line.trunk.start != val2);
            if (nothingInclude3) {
                trunk_arr.push(line.trunk.start);
            }

            let nothingInclude4 = trunk_arr.every((val2) => line.trunk.end != val2);
            if (nothingInclude4) {
                trunk_arr.push(line.trunk.end);
            }

            index = index + 1;
        });

        index = index + 1;

        if (index < trunk_arr.length) {
            arr.push(line);
        }
    } else {
        arr.push(line);
    }

    return kruskal(arr);
}

function sort() {
    lineArr.sort((a, b) => {
        return a.weight - b.weight;
    });
}

sort();
let result = kruskal(trunks);
console.log(result);
