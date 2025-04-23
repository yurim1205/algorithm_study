const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .trim()
  .split('\n');

let totalPrice = 0; // 총 금액
let sum = parseInt(input[0]); // 총합

for (let i = 2; i < input.length; i++) {  // i < input.length로 수정
  const [x, num] = input[i].split(' ').map(Number);
  totalPrice += x * num;  // 물건 가격을 더함
}

totalPrice === sum ? console.log("Yes") : console.log("No");  // 계산된 총액과 비교
