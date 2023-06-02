n = int(input())
list = [int(x) for x in input().split()]
for i in range(n-1):
    idx = 0
    for j in range(1, n-i):
        if list[j]>list[idx]:
            idx = j
    list[idx], list[n-i-1] = list[n-i-1], list[idx]
answer = 0
idx = 0
for i in list:
    idx += i
    answer += idx
print(answer)