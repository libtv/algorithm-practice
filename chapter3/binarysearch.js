let array = [1, 2, 3, 5, 7, 8, 9, 11, 15, 37, 69];

function binarySearch(arr, index) {
    let binary = Number(arr.length / 2).toFixed(0);

    if (arr[binary] == index) {
        return arr[binary];
    } else if (arr[binary] < index) {
        let newArr = arr.slice(binary, arr.length);
        if (newArr.length == arr.length) return "false";
        return binarySearch(newArr, index);
    } else {
        let newArr = arr.slice(0, binary);
        if (newArr.length == arr.length) return "false";
        return binarySearch(newArr, index);
    }
}

console.log(binarySearch(array, 123));
