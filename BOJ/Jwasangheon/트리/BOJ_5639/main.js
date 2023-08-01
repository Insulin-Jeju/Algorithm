const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 트리 노드 클래스
class Node {
  constructor(v) {
    this.value = v;
    this.left = null;
    this.right = null;
  }
  insert(v) {
    // 삽입된 값 비교
    if (v < this.value) {
      // 왼쪽 node가 null 이면 새롭게 노드를 만들고 삽입
      if (!this.left) this.left = new Node(v);
      // 왼쪽 node가 있다면 그 노드에서 insert 호출
      else this.left.insert(v);
    } else {
      if (!this.right) this.right = new Node(v);
      else this.right.insert(v);
    }
  }
}

const postOrder = (node) => {
  // 후위 순회는 왼쪽, 오른쪽, 부모 순으로 출력
  node.left && postOrder(node.left);
  node.right && postOrder(node.right);
  console.log(node.value);
};

const solution = (input) => {
  // 첫번째 값이 root 이기때문에 노드를 만들고 시작
  const root = new Node(input[0]);

  // input의 길이만큼 돌면서 트리 만들기
  for (let i = 1; i < input.length; i++) {
    root.insert(input[i]);
  }
  // 후위 순회 결과 출력
  postOrder(root);
};

solution(input);
