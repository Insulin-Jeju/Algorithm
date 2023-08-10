const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const solution = (input) => {
  const [numbers, ...calculations] = input;

  const heap = [];

  for (const calculation of calculations) {
    if (calculation === 0) {
      if (heap.length > 0) {
        console.log(heap.shift());
      } else {
        console.log(0);
      }
    }
    heap.push(calculation);
    heap.sort((a, b) => b - a);
  }
};

solution(input);
