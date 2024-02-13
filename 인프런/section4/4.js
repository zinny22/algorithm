//NOTE : 완전 탐색
//졸업 선물

function first(arr) {
  let newArray,
    sumArray = [];
  let sum = 0;
  let result = 0;

  const maxPrice = arr.sort((a, b) => b.price - a.price);
  const discountPrice = maxPrice[0].price * 0.5;

  newArray = [
    { price: discountPrice, shippingCost: maxPrice[0].shippingCost },
    ...maxPrice.slice(1, 5),
  ].sort((a, b) => a.price - b.price);

  for (let x of newArray) {
    sum += x.price + x.shippingCost;
    sumArray.push(sum);
    sum = 0;
  }

  for (let i = 0; i < sumArray.length; i++) {
    sum += sumArray[i];

    if (sum <= 28) {
      result += 1;
    }
  }
  console.log(result);
}

let _arr = [
  { price: 6, shippingCost: 6 },
  { price: 2, shippingCost: 2 },
  { price: 4, shippingCost: 3 },
  { price: 4, shippingCost: 5 },
  { price: 10, shippingCost: 3 },
];

/**
 * 각 배열에서 할인이 적용된 가격을 기준으로 하나하나 적용해 봐야함 (완전 탐색)
 * @param {*} m : 최초 예산
 * @param {*} product : 학생이 원하는 상품의 가격과 배송비의 배열
 * @returns 최대로 구매 가능한 선물의 갯수
 */
function solution(m, product) {
  let answer = 0;
  let studentsLength = product.length;
  product.sort((a, b) => a[0] + a[1] + (b[0] + b[1]));

  for (let i = 0; i < studentsLength; i++) {
    let remainMoney = 0;
    remainMoney = m - product[i][0] / 2 + product[i][1];

    let cnt = 1;
    for (let j = 0; j < studentsLength; j++) {
      const sumPrice = product[j][0] + product[j][1];
      if (j !== i && sumPrice > remainMoney) break;

      if (j !== i && sumPrice <= remainMoney) {
        remainMoney -= sumPrice;
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(28, arr));
