let arr = [];

arr[1] = [];
arr[2] = [];
arr[3] = [];
arr[4] = [];
arr[5] = [];
arr[6] = [];

arr[1].push(2);
arr[1].push(4);
arr[2].push(1);
arr[2].push(3);
arr[2].push(5);
arr[3].push(2);
arr[3].push(6);
arr[4].push(1);
arr[5].push(2);
arr[5].push(6);

let visited = [];
let next = [[1]];
let queue = [];

function bfs(final, idx) {
    while (true) {
        console.log(queue);

        for (let i = 0; i < queue.length; i++) {
            let pop = queue.shift();

            if (pop === final) return;
            if (visited[pop] == true) break;

            let result = arr[pop].map((val) => {
                queue.push(val);
                if (val === final) return true;
            });

            if (
                result.some((val) => {
                    return val === true;
                })
            )
                return;

            visited[pop] = true;
        }

        idx = idx + 1;
    }
}

queue.push(1);

bfs(6, 0);
