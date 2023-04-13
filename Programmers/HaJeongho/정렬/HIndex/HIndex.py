def solution(citations):
    answer = 0
    for i in range(1, len(citations)):
        while i!=0:
            if citations[i]<citations[i-1]:
                citations[i],citations[i-1] = citations[i-1], citations[i]
                i -= 1
            else:
                break
    for i in range(citations[-1]):
        if citations[-i]>=i:
            answer = i
        else:
            break
    return answer
