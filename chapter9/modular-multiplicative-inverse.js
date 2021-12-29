function factorization(n, callback) {
    let a = new Set();
    let i = 2;
    let temp = n;
    for (;;) {
        if (n == 1) break;
        if (n % i == 0) {
            a.add(i);
            n /= i;
        } else {
            i++;
        }
    }

    let result = temp;

    for (const iter of a) {
        result *= callback(iter);
    }

    return result;
}

function inv(m, x) {
    return (
        x **
            (factorization(m, (n) => {
                return 1 - 1 / n;
            }) -
                1) %
        m
    );
}

console.log(inv(17, 6));
