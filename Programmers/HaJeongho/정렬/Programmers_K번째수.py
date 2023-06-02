def solution(array, commands):
    answer = []
    for i in commands:
        partarray = array[i[0]-1:i[1]]
        for j in range(1, len(partarray)):
            while j!=0:
                if partarray[j]<partarray[j-1]:
                    partarray[j],partarray[j-1] = partarray[j-1], partarray[j]
                    j -= 1
                else:
                    break
        answer.append(partarray[i[2]-1])
    return answer
