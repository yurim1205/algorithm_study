const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .split('\n');

  // input[0] 이렇게 하면 분을 제대로 처리하지 못함
  // split(' ')로 분리하여 시,분을 각각 할당해야 함 
  let [hour, minute] = input[0].split(' ').map(Number);
  
  let addMinute =parseInt(input[1]);

  minute += addMinute;

 if (minute >= 60) {
    hour += Math.floor(minute / 60);
    minute = minute % 60;
 }

if(hour >=24){
    hour = hour % 24;
}

console.log(hour,minute);