let arr = [];

arr[1] = [];
arr[2] = [];
arr[3] = [];
arr[4] = [];
arr[5] = [];

arr[1].push(2);
arr[1].push(4);
arr[2].push(3);
arr[2].push(5);
arr[3].push(2);
arr[3].push(5);
arr[4].push(1);
arr[5].push(3);
arr[5].push(2);

let visitedArr = [];

function dfs(iam, final) {
    visitedArr[iam] = true;
    console.log(iam + " -> ");

    if (visitedArr[final] == true) {
        return "success";
    } else {
        for (const key of arr[iam]) {
            if (visitedArr[key] !== true) {
                if (dfs(key, final) == "success") {
                    return;
                }
            }
        }
    }
}

dfs(1, 5);
