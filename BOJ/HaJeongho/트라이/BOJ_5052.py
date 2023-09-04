class TrieNode:
    
    def __init__(self):
        self.children = {}
        
class Trie:
    
    def __init__(self):
        self.root = TrieNode()
        
    def insert(self, word):
        currentNode = self.root
        for char in word:
            if currentNode.children.get("*"):
                overlap = True
            # 현재 노드에 현재 문자를 키로 하는 자식이 있으면
            if currentNode.children.get(char):
                # 자식 노드를 따라간다.
                currentNode = currentNode.children[char]
            else:
                # 현재 노드의 자식 중에 현재 문자가 없으면
                # 그 문자를 새 자식 노드로 추가한다.
                newNode = TrieNode()
                currentNode.children[char] = newNode

                # 새로 추가한 노드를 따라간다.
                currentNode = newNode

        # 단어 전체를 트라이에 삽입했으면
        # 마지막으로 *를 추가한다.
        currentNode.children["*"] = None

n = int(input())
for _ in range(n):
    k = int(input())
    trie = Trie()
    overlap = False
    for _ in range(k):
        trie.insert(input())
    if overlap:
        print("NO")
    else:
        print("YES")