const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const [lengthAndCount, givenStrings] = input;
  const [length, count] = lengthAndCount.split(" ");

  const givenArray = givenStrings.split(" ").map((ele) => +ele);

  for (let i = 0; i < count; i++) {
    for (let j = 0; j < length; j++) {
      if (givenArray[j + 1] && givenArray[j] > givenArray[j + 1]) {
        const temp = givenArray[j];
        givenArray[j] = givenArray[j + 1];
        givenArray[j + 1] = temp;
      }
    }
  }

  console.log(givenArray);
  console.log(givenArray.join(" "));
}

solution(input);
