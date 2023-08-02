def cost(n, memo=[[0,0], [0,1], [0,2]]):
    if n == 0:
        new_memo = []
        for i in memo:
            new_memo.append(i[0])
        return print(min(new_memo))
    tmp = []
    array = input().split()
    for j in memo:
        if j[1] == 0:
            tmp.append([j[0] + int(array[1]),1])
            tmp.append([j[0] + int(array[2]),2])
        if j[1] == 1:
            tmp.append([j[0] + int(array[0]),0])
            tmp.append([j[0] + int(array[2]),2])
        if j[1] == 2:
            tmp.append([j[0] + int(array[0]),0])
            tmp.append([j[0] + int(array[1]),1])
    memo = []
    memo += tmp
    return cost(n-1, memo)
cost(int(input()))