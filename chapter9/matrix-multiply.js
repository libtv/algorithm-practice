let a = [
    [1, 4],
    [3, 9],
    [8, 6],
];
let b = [
    [1, 6],
    [2, 9],
];

// let a = [[1], [2], [3]];
// let b = [[1, 2]];

function process(a, b) {
    multiply(a, b);

    function multiply(ar, br) {
        let newArr = [];

        if (ar[0].length !== br.length) return undefined;

        for (let i = 0; i < ar.length; i++) {
            newArr[i] = [];

            for (let j = 0; j < br[0].length; j++) {
                newArr[i][j] = 0;
            }

            for (let j = 0; j < ar[i].length; j++) {
                br.map((valArr, index) => {
                    if (j == index) {
                        valArr.map((val, idx) => {
                            newArr[i][idx] += ar[i][j] * val;
                        });
                    }
                });
            }
        }
        console.log(newArr);

        return newArr;
    }
}

process(a, b);
