const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .split(' ');

  const one = parseInt(input[0]);
  const two = parseInt(input[1]);
  const three = parseInt(input[2]);

const solution = function (one, two, three) {
    let money = 0;

    if (one === two && two === three) {
        money = 10000 + one * 1000;
    }
    else if (one === two){
        money = 1000 + one * 100;
    }
    else if (two === three){
        money = 1000 + two * 100;
    }
    else if (one === three){
        money = 1000 + one * 100;
    }
    else {
        money = Math.max(one, two, three)*100;
    }

    console.log(money);
}

solution(one, two, three);