def solution(n, computers):
    visited = []
    answer = 0
    def dfs(node):
        for i in range(n):
            if computers[node][i] == 1 and i not in visited:
                visited.append(i)
                dfs(i)
    for i in range(n):
        if i not in visited:
            dfs(i)
            answer += 1
    return answer