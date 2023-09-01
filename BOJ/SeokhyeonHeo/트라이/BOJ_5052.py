import sys

class TrieNode:
    
    def __init__(self):
        self.children = {}

class Trie:
    def __init__(self):
        self.root = TrieNode()
        
    def search(self, word):
        currentNode = self.root
        
        for char in word:
            if currentNode.children.get(char):
                currentNode = currentNode.children[char]
            else:
                return None
        
        return currentNode
    
    def insert(self, word):
        currentNode = self.root
        
        for char in word:
            if currentNode.children.get(char):
                currentNode = currentNode.children[char]
            else:
                newNode = TrieNode()
                currentNode.children[char] = newNode
                currentNode = newNode
        
        currentNode.children["*"] = None
        

t = int(sys.stdin.readline())

for _ in range(t):
    n = int(sys.stdin.readline())
    gildong = Trie()
    numbers = []
    all = True
    
    for i in range(n):
        number = sys.stdin.readline().strip()
        numbers.append(number)

    numbers.sort(key=len, reverse=True)
    
    gildong.insert(numbers[0])
    
    for i in range(1, n):
        if gildong.search(numbers[i]) != None:
            print("NO")
            all = False
            break
        
        gildong.insert(numbers[i])
    
    if all == True:
        print("YES")