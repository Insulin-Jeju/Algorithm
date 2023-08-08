import heapq
import sys

n = int(input())
heap = []

for i in range(n):
    x = int(input())
    if x > 0:
        heapq.heappush(heap, -x)
    else:
        if heap:
            result = heapq.heappop(heap)
            print(-result)
        else:
            print(0)