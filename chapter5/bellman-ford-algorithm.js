import _ from "lodash";

let arr = [];
arr[1] = [];
arr[1].push({ 2: 2 });
arr[1].push({ 3: 3 });
arr[1].push({ 4: 7 });

arr[2] = [];
arr[2].push({ 1: 2 });
arr[2].push({ 4: 3 });
arr[2].push({ 5: 5 });

arr[3] = [];
arr[3].push({ 1: 3 });
arr[3].push({ 4: 1 });

arr[4] = [];
arr[4].push({ 3: 1 });
arr[4].push({ 2: 3 });
arr[4].push({ 5: 2 });

arr[5] = [];

let initialize = {
    node: [1],
    distance: 0,
};

let myArr = [];

function bellman(init, final) {
    //* 처음 값 알아내기..
    let pop = init.node.pop();
    init.node.push(pop);

    if (pop == final) {
        myArr.push(init);
    }

    //* next 에 추가하기
    arr[pop].map((val) => {
        Object.entries(val).map(([key, value]) => {
            let everyNotVisited = init.node.every((val) => {
                return key != val;
            });

            //* 노드가 처음 가는 곳이라면
            if (everyNotVisited == true) {
                let inits = _.cloneDeep(init);
                inits.node.push(Number(key));
                inits.distance += value;

                bellman(inits, final);
            }
        });
    });
}

function myArrSort() {
    myArr.sort((a, b) => {
        return a.distance - b.distance;
    });
    console.log(`제일 작은 값은 :  ${JSON.stringify(myArr[0])}`);
}

bellman(initialize, 5);
myArrSort();
