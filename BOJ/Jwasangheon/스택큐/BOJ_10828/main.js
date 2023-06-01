const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const stack = [];
  const result = [];
  const commandLength = input.shift();

  for (let i of input) {
    if (i.split(" ")[0] === "push") {
      stack.push(i.split(" ")[1]);
    } else if (i.split(" ")[0] === "top") {
      if (stack.length === 0) {
        result.push(-1);
      } else {
        result.push(+stack[stack.length - 1]);
      }
    } else if (i.split(" ")[0] === "size") {
      result.push(stack.length);
    } else if (i.split(" ")[0] === "pop") {
      if (stack.length === 0) {
        result.push(-1);
      } else {
        result.push(+stack.pop());
      }
    } else if (i.split(" ")[0] === "empty") {
      if (stack.length === 0) {
        result.push(1);
      } else {
        result.push(0);
      }
    }
  }
  console.log(result.join("\n"));
  return stack;
}

solution(input);
