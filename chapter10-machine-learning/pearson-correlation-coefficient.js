let data = [
    [1, 2],
    [5, 6],
    [2, 4],
    [4, 4],
    [3, 3],
    [7, 9],
    [1, 9],
    [9, 2],
    [8, 7],
    [3, 6],
    [9, 9],
    [11, 10],
    [12, 6],
    [6, 6],
    [8, 6],
    [13, 11],
    [14, 10],
    [18, 23],
    [17, 22],
    [15, 21],
    [13, 12],
];

function cov(_x, _y) {
    let utils = {
        subtract(xy, _xy) {
            return xy - _xy;
        },

        multiply(x, y) {
            return x * y;
        },

        process(arr) {
            return arr.reduce((prev, [x, y]) => {
                let result = utils.multiply(utils.subtract(x, _x), utils.subtract(y, _y));
                return prev + result;
            }, 0);
        },
    };

    return utils.process(data);
}

function deviation(_x, _y) {
    let utils = {
        subtract(xy, _xy) {
            return xy - _xy;
        },

        Xprocess(arr) {
            return Math.sqrt(
                arr.reduce((prev, [x, y]) => {
                    let result = utils.subtract(x, _x) ** 2;
                    return prev + result;
                }, 0)
            );
        },

        Yprocess(arr) {
            return Math.sqrt(
                arr.reduce((prev, [x, y]) => {
                    let result = utils.subtract(y, _y) ** 2;
                    return prev + result;
                }, 0)
            );
        },
    };

    let param1 = utils.Xprocess(data);
    let param2 = utils.Yprocess(data);

    return param1 * param2;
}

console.log(cov(40, 1) / deviation(40, 1));
