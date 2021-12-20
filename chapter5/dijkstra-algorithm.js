import _ from "lodash";

let arr = [];
arr[1] = [];
arr[1].push({ 2: 5 });
arr[1].push({ 4: 9 });
arr[1].push({ 5: 1 });

arr[2] = [];
arr[2].push({ 3: 2 });
arr[2].push({ 1: 5 });

arr[3] = [];
arr[3].push({ 2: 2 });
arr[3].push({ 4: 6 });
arr[3].push({ 5: 1 });

arr[4] = [];
arr[4].push({ 1: 9 });
arr[4].push({ 3: 6 });
arr[4].push({ 5: 2 });

arr[5] = [];
arr[5].push({ 1: 1 });
arr[5].push({ 4: 2 });

let visited = [];

let initializeObj = {
    node: [1],
    distance: 0,
};
let processQueue = [initializeObj];

function dikstra(end) {
    while (processQueue.length > 0) {
        let startObj = processQueue.shift();
        let start = startObj.node.pop();
        startObj.node.push(start);

        if (start == end) {
            console.log(startObj);
        } else {
            arr[start].map((val) => {
                Object.entries(val).map(([key, value]) => {
                    //* initialzeArr 에 해당 값을 넣고, processQueue로 돌려버림
                    let notInclude = startObj.node.every((ss) => ss != key);

                    if (notInclude) {
                        let myObj = _.cloneDeep(startObj);
                        myObj.node.push(key);
                        myObj.distance += value;
                        processQueue.push(myObj);
                    }
                });
            });
        }
    }
}

visited.push(1);
dikstra(3);
