const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const index = +input[0];

  const fibonacci = [0, 1];

  const addFibonacci = (fibonacci) => {
    if (fibonacci.length > index) {
      return fibonacci[index];
    } else {
      fibonacci.push(
        fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
      );
      return addFibonacci(fibonacci);
    }
  };

  console.log(addFibonacci(fibonacci));
}

solution(input);
