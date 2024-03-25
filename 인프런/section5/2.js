// 공통원소 구하기

function solution(a, b) {
  console.log(a.filter((item) => b.includes(item)).sort());
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];

solution(a, b);
