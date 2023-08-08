class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.value = val
        self.leftChild = left
        self.rightChild = right

def insert(value, node):
    if value < node.value:
        if node.leftChild is None:
            node.leftChild = TreeNode(value)
        else:
            insert(value, node.leftChild)

    elif value > node.value:
        if node.rightChild is None:
            node.rightChild = TreeNode(value)
        else:
            insert(value, node.rightChild)
                
def reverse(node):
    if node is None:
        return
    reverse(node.leftChild)
    reverse(node.rightChild)
    print(node.value)

import sys
sys.setrecursionlimit(10**6)
num_list = []

while True:
    try:
        num = int(sys.stdin.readline())
        num_list.append(num)
    except:
        break

val = None

for num in num_list:
    if val is None:
        val = TreeNode(num)
    else:
        insert(num, val)

reverse(val)