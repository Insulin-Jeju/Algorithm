str = input()
idx = input()
class Node:
    def __init__(self, data):
        self.data = data
        self.next_node = None
node_idx = 1
for i in str:
    i = Node(node_idx)
    node_idx += 1
print(Node.data)