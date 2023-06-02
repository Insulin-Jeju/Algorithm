from collections import deque

def solution(arr):
    answer = []
    queue = deque(arr)
    while queue:
        i = queue.popleft()
        if answer == []:
            answer.append(i)
        elif i != answer[-1]:
            answer.append(i)
    return answer