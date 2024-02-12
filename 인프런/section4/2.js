// 뒤집은 소수

function first(n, numbers) {
  let answer = [];

  for (let x of numbers) {
    //내장 함수 사용 (me)
    // const reverse = Number(x.toString().split("").reverse().join(""));

    //숫자 그대로 뒤집는 방법
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }

    if (isPrime(res)) answer.push(res);
  }

  console.log(answer);
}

function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

first(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]);
