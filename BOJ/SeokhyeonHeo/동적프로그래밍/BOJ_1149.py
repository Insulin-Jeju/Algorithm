N = int(input())
costs = []

for i in range(N):
    costs.append(list(map(int, input().split())))

for i in range(1, len(costs)):
    costs[i][0] = costs[i][0] + min(costs[i-1][1], costs[i-1][2])
    costs[i][1] = costs[i][1] + min(costs[i-1][0], costs[i-1][2])
    costs[i][2] = costs[i][2] + min(costs[i-1][0], costs[i-1][1])
    
print(min(costs[N-1]))