import sys
n = sys.stdin.readline().split(' ')
list = list(map(int, input().split()))
N = int(n[0])
K = int(n[1])
answer = []
for i in range(N-1):
    sorted = False
    for j in range(N-i-1):
        if list[j] > list[j+1]:
            answer.extend([list[j+1],list[j]])
            list[j], list[j+1] = list[j+1], list[j]
            sorted = True
    if not sorted:
        break
if len(answer) >= 2*K-1:
    print(answer[2*K-2], answer[2*K-1])
else:
    print(-1)