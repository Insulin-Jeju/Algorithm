# -*- coding: utf-8 -*-

N = int(input())

def anagram(A, B):
    
    A_hashTable = {}
    B_hashTable = {}
    
    for i in A:
        if A_hashTable.get(i):
            A_hashTable[i] += 1
        else:
            A_hashTable[i] = 1

    for j in B:
        if B_hashTable.get(j):
            B_hashTable[j] += 1
        else:
            B_hashTable[j] = 1
            
    if A_hashTable == B_hashTable:
        return print(A+' & '+B+' are anagrams.')
    else:
        return print(A+' & '+B+' are NOT anagrams.')


for i in range(N):
    A, B = input().split()
    anagram(A, B)