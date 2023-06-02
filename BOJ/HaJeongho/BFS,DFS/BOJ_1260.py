from collections import deque
import sys
def dfs(graph, start, visited):
	visited[start] = True
	print(start, end=' ')
	if start not in graph:
		return 0
	for i in sorted(graph[start]):
		if not visited[i]:
			dfs(graph, i, visited)
def bfs(graph, start, visited):
	queue = deque([start])
	visited[start] = True
	if start not in graph:
		print(start)
		return 0
	while queue:
		v = queue.popleft()
		print(v, end=' ')
		for i in sorted(graph[v]):
			if not visited[i]:
				queue.append(i)
				visited[i] = True
graph = {}
n = input().strip().split(' ')
node, edge, start = [int(i) for i in n]
for i in range(edge):
    edge_info = input().strip().split(' ')
    n1, n2 = [int(j) for j in edge_info]
    if n1 not in graph:
        graph[n1] = [n2]
    elif n2 not in graph[n1]:
        graph[n1].append(n2)

    if n2 not in graph:
        graph[n2] = [n1]
    elif n1 not in graph[n2]:
        graph[n2].append(n1)
visited = [False]*1001
dfs(graph, start, visited)
print("")
visited = [False]*1001
bfs(graph, start, visited)