const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .split('\n');

const arr = input[1].split(' ').map(Number);
const ansNum = Number(input[2]);

const count = arr.filter(num => num  === ansNum).length;

console.log(count);