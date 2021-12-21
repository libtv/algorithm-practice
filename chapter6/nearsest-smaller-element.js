// 분할 상환 분석은 자료 구조에 대한 연산 회수를 추정할 때도 자주 사용된다.

let arr = [1, 3, 4, 2, 5, 3, 4, 2];

function nearestSmallerElement() {
    let myArr = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        myArr = myArr.filter((val) => {
            return val < element;
        });

        myArr.push(element);
    }

    console.log(myArr);
}

nearestSmallerElement();
