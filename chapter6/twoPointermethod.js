// 두 포인터 기법은 배열을 따라 포인터 두 개를 이동시켜 나가는 방법.
// 두 포인터 모두 한쪽 방향으로 움직이며, 그렇게 함으로써 알고리즘을 효율적으로 수행할 수 있게 된다.

// 양의 정수 n개로 이루어진 배열과 목표 합 x가 있을 때, 합이 x인 부분 배열을 구하거나 그러한 부분 배열이 존재하지 않는다는 것을 알아내려고 한다.

let arr = [1, 3, 2, 5, 1, 1, 2, 3];

function twoPointers(target) {
    let leftIdx = 0;
    let rightIdx = leftIdx + 1;

    for (;;) {
        let sum = arr
            .filter((value, idx) => {
                if (idx >= leftIdx && idx <= rightIdx) {
                    return value;
                }
            })
            .reduce((prev, current) => {
                return prev + current;
            }, 0);

        if (sum > target) {
            leftIdx++;
        } else if (sum < target) {
            rightIdx++;
        } else if (sum == target) {
            return [leftIdx, rightIdx];
        } else {
            break;
        }
    }
}

let [a, b] = twoPointers(8);
console.log(arr[a], arr[b]);
