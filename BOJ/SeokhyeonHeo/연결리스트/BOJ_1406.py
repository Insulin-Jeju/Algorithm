import sys

class Node:
    previous_node = None
    next_node = None
    def __init__(self, data):
        self.data = data

class LinkedList:
    def set_head(self, node:Node):
        self.head:Node = node
        self.cursor:Node = self.head
        
    def get_head(self) -> Node:
        return self.head
    
    def move_right(self):
        if self.cursor == None:
            self.cursor = self.head
        elif self.cursor.next_node != None:
            self.cursor = self.cursor.next_node
            
    def move_left(self):
        if self.cursor != None:
            self.cursor = self.cursor.previous_node
            
    def insert(self, node:Node):
        if self.cursor == None: 
            node.next_node = self.head
            self.head.previous_node = node
            self.head = node
        else:
            next = self.cursor.next_node
            if next:
                next.previous_node = node
            self.cursor.next_node = node
            node.next_node = next
            node.previous_node = self.cursor
        self.cursor = node
        
    def delete(self):
        if self.cursor == None:
            return
        previous_node = self.cursor.previous_node
        next_node = self.cursor.next_node
        if next_node != None:
            next_node.previous_node = previous_node
        if previous_node != None:
            previous_node.next_node = next_node
        else: 
            self.head = next_node
        self.cursor = previous_node

text = sys.stdin.readline().strip()
cm = LinkedList()
cm.set_head(Node(text[0]))
for s in text[1:]:
    node = Node(s)
    cm.insert(node)

cmd_num = int(sys.stdin.readline().strip())
for _ in range(cmd_num):
    cmd = sys.stdin.readline().split()
    if cmd[0] == 'P':
        s = cmd[1]
        node = Node(s)
        cm.insert(node)
    if cmd[0] == 'L':
        cm.move_left()
    if cmd[0] == 'D':
        cm.move_right()
    if cmd[0] == 'B':
        cm.delete()

cursor = cm.get_head()

result = cursor.data
while cursor.next_node != None:
    cursor = cursor.next_node
    result += cursor.data
print(result)