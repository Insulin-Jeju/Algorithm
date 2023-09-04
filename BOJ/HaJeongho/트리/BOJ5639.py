import sys
sys.setrecursionlimit(10**6)

class TreeNode:
    def __init__(self,val,left=None,right=None):
        self.value = val
        self.leftChild = left
        self.rightChild = right

def insert(value, node):
    if value < node.value:

        # 왼쪽 자식이 없으면 왼쪽 자식으로서 값을 삽입한다.
        if node.leftChild is None:
            node.leftChild = TreeNode(value)
        else:
            insert(value, node.leftChild)

    elif value > node.value:

        # 오른쪽 자식이 없으면 오른쪽 자식으로서 값을 삽입한다.
        if node.rightChild is None:
            node.rightChild = TreeNode(value)
        else:
            insert(value, node.rightChild)

def post_order(node):
    if node is None:
        return

    post_order(node.leftChild)
    post_order(node.rightChild)
    print(node.value)

root = None
list = []

while True:
    try:
        list.append(int(input()))
    except EOFError:
        break

for node in list:
    if root is None:
        root = TreeNode(node)
    else:
        insert(node, root)

post_order(root)