const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const count = +input[0];
const arr = input[1].split(" ").sort((a, b) => a - b);
const firstNumber = +arr[0];
const lastNumber = +arr[count - 1];
let result = 0;

arr.length >= 2
  ? (result = firstNumber * lastNumber)
  : (result = firstNumber * firstNumber);

console.log(result);