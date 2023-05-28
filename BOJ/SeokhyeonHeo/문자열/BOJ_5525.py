import sys

N = int(sys.stdin.readline())
M = int(sys.stdin.readline())
S = sys.stdin.readline()

hashTable = {}

count = 0

pattern = 'I' + 'OI' * N

for i in range(M-(2*N)):
    seperated = ""
    for j in range(1+2*N):
        seperated += (S[j+i])
    if seperated in hashTable:
        hashTable[seperated] += 1
    else:
        hashTable[seperated] = 1

count = hashTable.get(pattern, 0)
    
print(count)