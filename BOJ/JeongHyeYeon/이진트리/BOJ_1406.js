// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//input에 각 줄이 배열 자료형으로 담기므로 각 줄에 접근하려면 인덱싱으로 접근

const input = [
  "dmih",
  "11",
  "B",
  "B",
  "P x",
  "L",
  "B",
  "B",
  "B",
  "P y",
  "D",
  "D",
  "P z",
];
//const input = ["abc", "9", "L", "L", "L", "L", "L", "P x", "L", "B", "P y"];
// const input = ["abcd", "3", "P x", "L", "P y"];
let str = input[0].split(""); //['a', 'b', 'c', 'd']
let nodeLength = Number(str);
let len = Number(input[1]); //3
let cusor = str.length; //4(a,b,c,d)+1 //0,1,2,3 + 1

class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null; // 다음을 가리키는 포인터, 처음에는 null로 초기화
  }
}

// const node = [];
// const nodes = new Array(str.length);

// for (let i = 0; i < str.length; i++) {
//   nodes[i] = new Node(str[i]);
// }

// for (let i = 0; i < str.length - 1; i++) {
//   nodes[i].nextNode = nodes[i + 1];
// }

for (i = 0; i < input.length - 1; i++) {
  global["node" + i] = new Node(str[i]);
  //console.log(global["node" + i]);
}
for (i = 0; i < input.length - 2; i++) {
  global["node" + i].nextNode = global["node" + `${i + 1}`];
  //console.log(global["node" + i].nextNode.data);
}
//console.log(node1.nextNode);

class LinkedList {
  constructor(firstNode) {
    this.firstNode = firstNode;
  }

  /*
  for (i = 0; i < input.length - 2; i++) {
  global["node" + i].nextNode = global["node" + `${i + 1}`];
  console.log(global["node" + i].nextNode.data);
}
console.log(node1.nextNode);
*/

  insert(index, value) {
    const newNode = new Node(value);

    if (index === 0) {
      // 삽입할 위치가 첫 번째인 경우, 새 노드를 첫 번째 노드로 만듭니다.
      newNode.nextNode = this.firstNode;
      this.firstNode = newNode;
      return;
    } else {
      let currentNode = this.firstNode;
      let currentIndex = 0;

      while (currentIndex < index - 1 && currentNode !== null) {
        currentNode = currentNode.nextNode;
        currentIndex += 1;
      }

      if (currentNode !== null) {
        // 삽입할 위치를 찾았으며, 새 노드를 삽입합니다.
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
      } else {
        // 지정된 인덱스보다 큰 길이를 가지는 경우, 리스트 끝에 새 노드를 추가합니다.
        let lastNode = this.firstNode;
        while (lastNode.nextNode !== null) {
          lastNode = lastNode.nextNode;
        }
        lastNode.nextNode = newNode;
      }
    }
  }

  delete(index) {
    if (index === 0) {
      // 삭제할 위치가 첫 번째인 경우, 첫 번째 노드를 다음 노드로 변경합니다.
      this.firstNode = this.firstNode.nextNode;
    } else {
      let currentNode = this.firstNode;
      let currentIndex = 0;

      while (currentIndex < index - 1 && currentNode !== null) {
        currentNode = currentNode.nextNode;
        currentIndex += 1;
      }

      if (currentNode !== null && currentNode.nextNode !== null) {
        // 삭제할 위치를 찾았으며, 다음 노드를 현재 노드의 다음 노드로 변경하여 삭제합니다.
        currentNode.nextNode = currentNode.nextNode.nextNode;
      }
      // 삭제할 위치가 유효하지 않은 경우(인덱스가 리스트의 길이 이상인 경우) 아무것도 하지 않습니다.
    }
  }
  // 전체 링크드 리스트를 출력하는 print 메서드
  print() {
    let currentNode = this.firstNode;
    const result = [];
    while (currentNode !== null) {
      result.push(currentNode.data);
      currentNode = currentNode.nextNode;
    }
    console.log(result.join(""));
  }
}

// 링크드 리스트 인스턴스를 루프 밖에서 생성합니다.
const linkedList = new LinkedList(node0);

//const linkedList = new LinkedList(nodes[0]);
for (let i = 2; i <= len + 1; i++) {
  let [word, value] = input[i].split(" "); //[P,x], [L], [P,y]
  if (word == "L") {
    if (cusor !== 0) {
      //console.log(cusor);
      cusor--;
    } else {
      //console.log(cusor);
    }
  } else if (word == "D") {
    if (cusor !== nodeLength) {
      cusor++;
    }
  } else if (word == "B") {
    if (cusor !== 0) {
      //new LinkedList(str[0]).delete(cusor);
      //console.log(cusor);
      linkedList.delete(cusor - 1);
      nodeLength--;
      cusor--;
    }
  } else if (word == "P") {
    //new LinkedList(str[0]).insert(cusor, value);
    //console.log(cusor);
    linkedList.insert(cusor, value);
    nodeLength++;
    cusor++;
  }
}

//console.log(str.join(""));

// 모든 작업이 완료된 후 결과를 출력합니다.
linkedList.print();
console.log(linkedList.currentNode);
