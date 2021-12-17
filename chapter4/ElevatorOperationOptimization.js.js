/* 엘레베이터 운행 최적화
 문제 : 최대 하중이 x인 엘리베이터가 있고,
 1층에서 꼭대기 층 까지 가려고 하는 사람 n명이 있다.
 각 사람을 번호 0,1,...n-1로 표기하고,
 i번째 사람의 무게를 wegiht[i] 라고 하자..

 모든 사람이 꼭대기 층까지 가려면 엘리베이터가 최소 몇 번 운행되어야 하는가
*/

let myweight = [2, 3, 4, 5, 9];
let x = 12;
let n = 5;

let result = [];

function countElevatorOperation(weight, maxlength) {
    let sum = [];
    let arr = [[]];

    for (let i = 0; i < weight.length; i++) {
        let a = weight[i];
        sum[i] = a;
        arr[i] = [];
        arr[i].push(a);

        for (let j = i + 1; j < weight.length; j++) {
            let b = weight[j];

            /* a + b 가 n 보다 작거나 같아질때까지 더한다. */
            if (sum[i] + b <= x) {
                sum[i] = sum[i] + b;
                arr[i].push(b);
            }
        }
    }

    let a = 0;
    let b = 0;
    sum.map((val, index) => {
        if (val > a) {
            a = val;
            b = index;
        }
    });

    result.push(arr[b]);

    if ([...result].length !== myweight.length) {
        let rest = [];
        weight.map((val) => {
            if (
                arr[b].every((value) => {
                    if (val != value) {
                        return value;
                    }
                })
            ) {
                rest.push(val);
            }
        });
        countElevatorOperation(rest, maxlength);
    }
}

countElevatorOperation(myweight, myweight.length);
console.log(
    result.filter((val) => {
        if (val.length > 1) {
            return val;
        }
    })
);
