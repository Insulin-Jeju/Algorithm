const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    //911
    let node = this.root;
    console.log(node);
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
      if (node.isEndOfWord) {
        return true; // 다른 번호의 접두어인 경우
      }
    }
    node.isEndOfWord = true;
    return false; // 일관성이 없는 경우
  }
}

function isConsistency(phoneNumbers) {
  const trie = new Trie(); // 트라이 생성
  for (const phoneNumber of phoneNumbers) {
    if (trie.insert(phoneNumber)) {
      return "NO"; // 일관성이 없는 경우
    }
  }
  return "YES"; // 일관성이 있는 경우
}

// input에서 테스트케이스 수 추출
const testCaseCount = parseInt(input[0]);

// 현재 index(0번쨰 인덱스는 테스트 케이스 수)
let currentIndex = 1;

for (let i = 0; i < testCaseCount; i++) {
  const n = parseInt(input[currentIndex++]); // 1번째 인덱스 추출
  const phoneNumbers = input
    .slice(currentIndex, currentIndex + n)
    .map((ele) => Number(ele).toString()); // 1부터 그 값에 따라 slice를 통해 input을 나눔
  currentIndex += n; // 현재 index 변경
  console.log(isConsistency(phoneNumbers));
}
