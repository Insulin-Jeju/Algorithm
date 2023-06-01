const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const n = +input[0];
const m = +input[1];
const s = input[2];

const p = "IO".repeat(n) + "I";

const makeLPS = (pattern) => {
  const table = Array.from({ length: pattern.length }, () => 0);

  let left = 0;
  let right = 1;
  while (right < pattern.length) {
    while (left > 0 && pattern[left] !== pattern[right]) {
      // prefix !== suffix
      left = table[left - 1];
    }

    if (pattern[left] === pattern[right]) {
      // prefix === suffix
      table[right] = ++left;
    }

    right++;
  }

  return table;
};

const kmp = (parent, pattern) => {
  const lps = makeLPS(pattern);
  let count = 0;

  let parentIdx = 0;
  let patternIdx = 0;
  while (parentIdx < parent.length) {
    while (patternIdx > 0 && parent[parentIdx] !== pattern[patternIdx]) {
      patternIdx = lps[patternIdx - 1];
    }

    if (parent[parentIdx] === pattern[patternIdx]) {
      if (patternIdx === pattern.length - 1) {
        // 문자 모두 매칭
        count++;

        // prefix 길이만큼 점프
        patternIdx = lps[patternIdx];
      } else {
        patternIdx++;
      }
    }

    parentIdx++;
  }

  return count;
};

console.log(kmp(s, p));
