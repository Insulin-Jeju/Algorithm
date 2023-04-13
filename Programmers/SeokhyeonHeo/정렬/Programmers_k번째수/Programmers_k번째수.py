def solution(array, commands):
    answer = []
    list = []
    for comm in commands:
        list = array[comm[0]-1 : comm[1]]
        for i in range(1, len(list)):
            for j in range(i, 0, -1):
                if list[j] < list[j-1]:
                    list[j], list[j-1] = list[j-1], list[j]
                else:
                    break
        answer.append(list[comm[2]-1])
    return answer
