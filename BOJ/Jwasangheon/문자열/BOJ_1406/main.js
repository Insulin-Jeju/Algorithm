const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const leftStrings = input[0].split("");
  const rightStrings = [];
  leftStrings.pop();

  for (let i = 0; i < input[1]; i++) {
    const command = input[i + 2].trim();
    if (command === "L") {
      const str = leftStrings.pop();
      if (str) {
        rightStrings.unshift(str);
      }
    } else if (command === "D") {
      const str = rightStrings.shift();
      if (str) {
        leftStrings.push(str);
      }
    } else if (command === "B") {
      leftStrings.pop();
    } else {
      leftStrings.push(command[command.length - 1]);
    }
  }

  console.log(leftStrings.concat(rightStrings).join(""));
}

solution(input);
