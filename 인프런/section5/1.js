// 두 배열 합치기

function solution(a, b) {
  const totalArray = [...a, ...b];
  console.log(totalArray.sort());
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];

solution(a, b);
