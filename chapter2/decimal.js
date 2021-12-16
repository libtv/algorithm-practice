//  소수
function decimal(search) {
    for (let i = 2; i < search; i++) {
        if (search % i !== 0) {
            continue;
        } else {
            return decimal(search - 1);
        }
    }

    return search;
}

console.log(decimal(1000000));
