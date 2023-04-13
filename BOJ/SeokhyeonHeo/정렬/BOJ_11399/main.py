N = int(input())
arr = list(map(int, input().split()))

arr.sort()

def timecost(array):
    t = 0
    for i in range(N):
        for j in range(i+1):
            t += array[j]
    return t

print(timecost(arr))
