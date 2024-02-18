//NOTE : 완전 탐색
//멘토링

function solution(test) {
  let answer = 0;

  m = test.length;
  n = test[0].length;

  //   멘토가 되는 학생의 번호
  for (let i = 1; i <= n; i++) {
    //멘티가 되는 학생의 번호
    for (let j = 1; j <= n; j++) {
      let cnt = 0;

      //수학 테스트 번호
      for (let k = 0; k < m; k++) {
        let 멘토가_되는_i번의_학생의_등수 = 0;
        let 멘티가_되는_j번의_학생의_등수 = 0;

        //각 테스트의 등수
        for (let s = 0; s < n; s++) {
          // test[k][s]의 값은  k번째 테스트에서 s등을 하는 학생의 번호
          if (test[k][s] === i) 멘토가_되는_i번의_학생의_등수 = s;
          if (test[k][s] === j) 멘티가_되는_j번의_학생의_등수 = s;
        }
        if (멘토가_되는_i번의_학생의_등수 < 멘티가_되는_j번의_학생의_등수)
          cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

//테스트 등수 배열
let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(arr));
