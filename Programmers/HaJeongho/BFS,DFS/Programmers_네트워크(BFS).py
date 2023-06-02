from collections import deque

def solution(n, computers):
    answer = 0
    queue = deque()
    visited = []
    for i in range(n):
        if i not in visited:
            answer += 1
            queue.append(i)
            visited.append(i)
            while queue:
                node = computers[queue.popleft()]
                for j in range(n):
                    if node[j] == 1 and j not in visited:
                        queue.append(j)
                        visited.append(j)
    return answer