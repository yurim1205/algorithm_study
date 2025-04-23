const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .split('\n');

  let i = 0;
  let result = '';

  while (input[i] != '0 0') {
    let num = input[i].split(' ');

    result += Number(num[0]) + Number(num[1]) + '\n';
    i += 1;
  }

  console.log(result);