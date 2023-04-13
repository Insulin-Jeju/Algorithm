N, K = map(int, input().split())
arr = list(map(int, input().split()))
a = 0
b = 0
c = 0

def bubble_sort(array):
    kk = 0
    
    for i in range(N):
        changed = False
        for j in range(N - i - 1):
            if kk == K-1:
                if array[j] > array[j+1]:
                    array[j], array[j+1] = array[j+1], array[j]
                    a, b = array[j], array[j+1]
                    kk += 1
                    changed = True
            else:
                if array[j] > array[j+1]:
                    array[j], array[j+1] = array[j+1], array[j]
                    kk += 1
                    changed = True
            
        if not changed:
            break
    if kk < K:
        c = -1
        return c

    return a, b

a = bubble_sort(arr)
print(a[0], a[1])
