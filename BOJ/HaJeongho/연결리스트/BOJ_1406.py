class Node:
    def __init__(self, data):
        self.data = data
        self.next_node = None

class LinkedList:
    def __init__(self, first_node=None):
        self.first_node = first_node

    def index_of(self, value):
        current_node = self.first_node
        current_index = 0

        while current_node:
            if current_node.data == value:
                return current_index

            current_node = current_node.next_node
            current_index += 1

        return None
    
    def insert_at_index(self, index, value):
        new_node = Node(value)

        # 리스트 앞에 삽입하는 경우
        if index == 0:
            new_node.next_node = self.first_node
            self.first_node = new_node
            return

        # 앞이 아닌 다른 위치에 삽입하는 경우
        current_node = self.first_node
        current_index = 0

        # 먼저, 삽입하려는 새 노드의 바로 앞 노드에 접근한다.
        while current_index < (index - 1):
            current_node = current_node.next_node
            current_index += 1

        # 새 노드의 링크가 다음 노드를 가리키게 한다.
        new_node.next_node = current_node.next_node

        # 새 노드를 가리키도록 앞 노드의 링크를 수정한다.
        current_node.next_node = new_node
    
    def delete_at_index(self, index):
        # 첫 번째 노드를 삭제하는 경우
        if index == 0:
            # 첫 번째 노드를 두 번째 노드로 변경하여 삭제
            if self.first_node:
                self.first_node = self.first_node.next_node
            return

        current_node = self.first_node
        current_index = 0

        # 먼저 삭제하려는 노드의 바로 앞 노드를 찾아 current_node에 할당한다.
        while current_index < (index - 1) and current_node:
            current_node = current_node.next_node
            current_index += 1

        # 삭제하려는 인덱스가 리스트 범위를 벗어나는 경우 처리
        if current_node is None or current_node.next_node is None:
            return

        # 삭제하려는 노드의 바로 뒤 노드를 찾는다.
        node_after_deleted_node = current_node.next_node.next_node

        # current_node의 링크가 node_after_deleted_node를 가리키도록 수정한다.
        # 이렇게 하면 삭제하려는 노드가 리스트에서 제외된다.
        current_node.next_node = node_after_deleted_node

    def length(self):
        current_node = self.first_node
        count = 0

        while current_node:
            count += 1
            current_node = current_node.next_node

        return count
    
linked_list = LinkedList()
str = input()
repeat = int(input())
idx = 0
for char in str:
    linked_list.insert_at_index(idx, char)
    idx += 1

for _ in range(repeat):
    uinput = input().split(' ')
    if uinput[0] == 'L':
        if idx == 0:
            continue
        idx -= 1
    if uinput[0] == 'D':
        if idx == linked_list.length():
            continue
        idx += 1
    if uinput[0] == 'B':
        if idx == 0:
            continue
        linked_list.delete_at_index(idx)
    if uinput[0] == 'P':
        if idx == linked_list.length():
            continue
        linked_list.insert_at_index(idx, uinput[1])
        idx += 1

current_node = linked_list.first_node
while current_node:
    print(current_node.data, end='')
    current_node = current_node.next_node