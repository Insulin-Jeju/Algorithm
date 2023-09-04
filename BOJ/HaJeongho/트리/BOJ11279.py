class Heap:
    def __init__(self):
        self.data = []

    def root_node(self):
        return self.data[0] if self.data else None

    def last_node(self):
        return self.data[-1] if self.data else None

    def left_child_index(self, index):
        return (index * 2) + 1

    def right_child_index(self, index):
        return (index * 2) + 2

    def parent_index(self, index):
        return (index - 1) // 2

    def insert(self, value):
        self.data.append(value)
        new_node_index = len(self.data) - 1

        while new_node_index > 0 and self.data[new_node_index] > self.data[self.parent_index(new_node_index)]:
            self.data[self.parent_index(new_node_index)], self.data[new_node_index] = self.data[new_node_index], self.data[self.parent_index(new_node_index)]
            new_node_index = self.parent_index(new_node_index)

    def delete(self):
        if not self.data:
            return
        
        self.data[0] = self.data.pop()
        trickle_node_index = 0

        while self.has_greater_child(trickle_node_index):
            larger_child_index = self.calculate_larger_child_index(trickle_node_index)
            self.data[trickle_node_index], self.data[larger_child_index] = self.data[larger_child_index], self.data[trickle_node_index]
            trickle_node_index = larger_child_index

    def has_greater_child(self, index):
        left_child_idx = self.left_child_index(index)
        right_child_idx = self.right_child_index(index)
        return (left_child_idx < len(self.data) and self.data[left_child_idx] > self.data[index]) or \
               (right_child_idx < len(self.data) and self.data[right_child_idx] > self.data[index])

    def calculate_larger_child_index(self, index):
        if self.right_child_index(index) >= len(self.data):
            return self.left_child_index(index)
        
        if self.data[self.right_child_index(index)] > self.data[self.left_child_index(index)]:
            return self.right_child_index(index)
        else:
            return self.left_child_index(index)

# 테스트
heap = Heap()
result = []

# 입력 처리
N = int(input())
for _ in range(N):
    x = int(input())
    if x == 0:
        if heap.data:
            result.append(heap.root_node())
            heap.delete()
        else:
            result.append(0)
    else:
        heap.insert(x)

# 출력
for r in result:
    print(r)