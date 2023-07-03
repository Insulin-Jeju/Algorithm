const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const numberOfHouse = Number(input.shift(1)); // 총 갯수
  const coloringHouse = input.map((ele) =>
    ele.split(" ").map((ele) => Number(ele))
  ); // 색칠하는 비용 2중 배열

  for (let i = 1; i < numberOfHouse; i++) {
    coloringHouse[i][0] += Math.min(
      coloringHouse[i - 1][1],
      coloringHouse[i - 1][2]
    );
    coloringHouse[i][1] += Math.min(
      coloringHouse[i - 1][0],
      coloringHouse[i - 1][2]
    );
    coloringHouse[i][2] += Math.min(
      coloringHouse[i - 1][0],
      coloringHouse[i - 1][1]
    );
  } // 작은 수만 골라 내서 더한다.

  console.log(Math.min(...coloringHouse[numberOfHouse - 1])); // 나머지 전체에서 제일 숫자가 낮은 숫자를 출력한다.
}

solution(input);
