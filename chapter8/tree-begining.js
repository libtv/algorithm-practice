// 트리는 노드 n개와 간선 n-1개로 이루어진 사이클 없는 연결 그래프를 말한다.
// 트리에서 임의의 간선을 하나 제거하면 두 개의 컴포넌트로 나뉘게 되고, 간선을 하나 추가하면 사이클이 만들어진다.

let tree = [0, [2, 3, 4], [5, 6], 0, [7], 0, [8], 0, 0];
let search = false;

function dfs(s, e, callback) {
    console.log(tree[s]);
    if (Array.isArray(tree[s])) {
        for (const target of tree[s]) {
            if (search) return;
            console.log(target);

            if (target == e) {
                callback();
            } else {
                dfs(target, e, callback);
            }
        }
    }
}

dfs(2, 8, () => {
    console.log("찾았습니다.");
    search = true;
    return;
});
