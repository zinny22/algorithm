// 자리수의 합

/**
 * 지니 최초 풀이
 * @param {} n : 자연수의 갯수
 * @param {*} numbers :
 */
function first(n, numbers) {
  const result = [];

  for (let i = 0; i < n; i++) {
    const number = numbers[i].toString();

    let sum = 0;
    for (let j = 0; j < number.length; j++) {
      sum += Number(number[j]);
    }

    result.push({ origin: numbers[i], sum });
  }

  const maxSum = result.sort((a, b) => b.sum - a.sum)[0].sum;
  const newResult = result.filter((_item) => _item.sum === maxSum);

  console.log(newResult.sort((a, b) => b.origin - a.origin)[0].origin);
}

function main(n, numbers) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of numbers) {
    // let sum = 0,
    //   tmp = x;

    // while (tmp) {
    //   sum += tmp % 10;
    //   tmp = Math.floor(tmp / 10);
    // }

    //내장함수 사용 하는 법
    let sum = x
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  console.log(answer);
}

main(7, [128, 460, 603, 40, 521, 137, 123]);
