def solution(arr):
    answer = []
    answer.append(arr[0])
    for i in range(len(arr)-1):
        if arr[i] != arr[i+1]:
            answer.append(arr[i+1])
    return answer

# arr[0]을 먼저 answer에 append
# 이후 루프를 돌며 같지 않을 때만 answer에 append