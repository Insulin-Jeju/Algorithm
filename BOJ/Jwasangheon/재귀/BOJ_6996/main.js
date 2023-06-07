const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\r\n");

function solution(input) {
  let anagrams = [];
  let anagram = [];
  const inputLength = input.shift();
  for (let i of input) {
    anagrams.push(i.split(" "));
  }
  for (let j = 0; j < anagrams.length; j++) {
    for (k = 0; k < anagrams[j].length; k++) {
      anagram.push(anagrams[j][k].split("").sort().join(""));
    }
  } // 정렬해서 비교
  let m = 0;
  for (let i = 0; i < anagram.length; i += 2) {
    if (anagram[i] === anagram[i + 1]) {
      console.log(`${anagrams[m][0]} & ${anagrams[m][1]} are anagrams.`);
      m++;
    } else {
      console.log(`${anagrams[m][0]} & ${anagrams[m][1]} are NOT anagrams.`);
      m++;
    }
  } //출력
}

solution(input);
