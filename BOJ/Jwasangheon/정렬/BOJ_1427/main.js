const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const strings = input[0]
    .split("")
    .sort((a, b) => b - a)
    .join("");

  console.log(strings);
}

solution(input);
