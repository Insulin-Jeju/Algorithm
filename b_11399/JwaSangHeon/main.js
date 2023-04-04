const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  let result = 0;
  const [peopleCount, withdrawalTimes] = input;
  const withdrawalTimesArray = withdrawalTimes
    .split(" ")
    .map((ele) => +ele)
    .sort((a, b) => a - b);

  for (let i = 0; i < peopleCount; i++) {
    const sum = withdrawalTimesArray
      .slice(0, i + 1)
      .reduce((acc, cur) => acc + cur, 0);
    result += sum;
  }

  // console.log(peopleCount);
  // console.log(withdrawalTimesArray);
  console.log(result);
}

solution(input);
