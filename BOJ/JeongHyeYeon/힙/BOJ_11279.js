const arr = [13, 0, 1, 2, 0, 0, 3, 2, 1, 0, 0, 0, 0, 0];

class Heap {
  //빈 배열로 힙을 초기화한다.
  constructor() {
    this.data = [];
  }

  //root_node메서드 -> 배열의 첫번째 항목을 반환
  root_node() {
    return this.data[0];
  }

  //last_node메서드 -> 배열의 마지막 값을 반환한
  last_node() {
    return this.data[this.data.length - 1];
  }

  //자식노드 찾기
  left_child_index(index) {
    return index * 2 + 1;
  }

  right_child_index(index) {
    return index * 2 + 2;
  }

  //부모노드 찾기
  parent_index(index) {
    return (index - 1) / 2;
  }

  //힙 삽입
  insert(value) {
    // value를 배열 끝에 삽입해 마지막 노드로 만든다.
    this.data.push(value);
    // 새로 삽입한 노드의 인덱스를 저장한다.
    let new_node_index = this.data.length - 1;

    // 다음 루프는 "위로 트리클링"하는 알고리즘을 실행한다.
    // 새 노드가 루트 자리에 없고 새 노드가 부모 노드보다 크면
    while (
      new_node_index > 0 &&
      this.data[new_node_index] > this.data[this.parent_index(new_node_index)]
    ) {
      // 새 노드와 부모 노드를 스왑한다.
      [
        this.data[this.parent_index(new_node_index)],
        this.data[new_node_index],
      ] = [
        this.data[new_node_index],
        this.data[this.parent_index(new_node_index)],
      ];
      // 새 노드 인덱스를 부모 노드의 인덱스로 업데이트한다.
      new_node_index = this.parent_index(new_node_index);
    }
  }

  //힙 삭제
  delete() {
    // 힙에서는 루트 노드만 삭제하므로
    // 배열에서 마지막 노드를 팝해 루트 노드로 넣는다.
    this.data[0] = this.data.pop();
    // "트리클 노드"의 현재 인덱스를 기록한다.
    let trickle_node_index = 0;

    // 다음 루프는 "아래로 트리클링"하는 알고리즘을 실행한다.
    // 트리클 노드에 자기보다 큰 자식이 있으면 루프를 실행한다.
    while (this.has_greater_child(trickle_node_index)) {
      // 더 큰 자식의 인덱스를 변수에 저장한다.
      let larger_child_index =
        this.calculate_larger_child_index(trickle_node_index);
      // 트리클 노드와 더 큰 자식을 스왑한다.
      [this.data[trickle_node_index], this.data[larger_child_index]] = [
        this.data[larger_child_index],
        this.data[trickle_node_index],
      ];
      // 트리클 노드의 새 인덱스를 업데이트한다.
      trickle_node_index = larger_child_index;
    }
  }

  has_greater_child(index) {
    // index에 있는 노드에 왼쪽 자식이나 오른쪽 자식이 있는지
    // 어느 한 자식이라도 index에 있는 노드보다 큰지 확인한다.
    return (
      (this.data[this.left_child_index(index)] &&
        this.data[this.left_child_index(index)] > this.data[index]) ||
      (this.data[this.right_child_index(index)] &&
        this.data[this.right_child_index(index)] > this.data[index])
    );
  }

  calculate_larger_child_index(index) {
    // 오른쪽 자식이 없으면
    if (!this.data[this.right_child_index(index)]) {
      // 왼쪽 자식의 인덱스를 반환한다.
      return this.left_child_index(index);
    }

    // 오른쪽 자식의 값이 왼쪽 자식의 값보다 크면
    if (
      this.data[this.right_child_index(index)] >
      this.data[this.left_child_index(index)]
    ) {
      // 오른쪽 자식의 인덱스를 반환한다.
      return this.right_child_index(index);
    } else {
      // 왼쪽 자식의 값이 오른쪽 자식의 값보다 크거나 같으면
      // 왼쪽 자식의 인덱스를 반환한다.
      return this.left_child_index(index);
    }
  }
}

let something = new Heap();

for (let i = 1; i <= arr[0]; i++) {
  //0이면, 가장 큰 값 출력
  if (arr[i] === 0) {
    if (something.data.length === 0) {
      //배열이 비어있을 경우 0출력
      console.log("0");
    } else {
      //힙의 루트 노드 = 가장 큰 값 출력
      console.log(something.data[0]);
      //가장 큰 값 삭제
      something.delete(something.data[0]);
    }
  }
  //0이 아닌 다른 값일 경우, 값 삽입
  else if (arr[i] !== 0) {
    something.insert(arr[i]);
  }
}
