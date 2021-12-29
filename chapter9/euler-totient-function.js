function factorization(n) {
    let a = new Set();
    let i = 2;
    for (;;) {
        if (n == 1) break;
        if (n % i == 0) {
            a.add(i);
            n /= i;
        } else {
            i++;
        }
    }

    let result = 1;

    for (const iter of a) {
        result *= q(iter);
    }

    function q(n) {
        return n ** 0 * (n - 1);
    }

    return result;
}

console.log(factorization(10));
