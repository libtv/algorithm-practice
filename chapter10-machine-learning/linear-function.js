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

const utils = {
    sum(arr) {
        return arr.reduce((prev, current) => {
            return prev + current;
        });
    },

    avg(arr) {
        return this.sum(arr) / arr.length;
    },
};

function linearRegressionFunction() {
    let x = data.map((val) => val[0]);
    let y = data.map((val) => val[1]);

    let x_avg = utils.avg(x);
    let y_avg = utils.avg(y);

    let num = utils.sum(x.map((x, i) => (x - x_avg) * (y[i] - y_avg)));
    let den = utils.sum(x.map((x) => (x - x_avg) ** 2));

    let m = num / den;
    let b = y_avg - m * x_avg;

    console.log(`y=${m}x + ${b}`);
}

linearRegressionFunction();
