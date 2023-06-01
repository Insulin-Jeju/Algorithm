# # -*- coding: utf-8 -*-
# import sys
# N = int(sys.stdin.readline())

# def fibo(n):
#     # 기저 조건: n이 1일 때
#     if n == 1:
#         return n
#     elif n == 0:
#         return 0
#     else: 
#         return fibo(n-1) + fibo(n-2)
    
# print(fibo(N))

# n = int(input())

# a,b = 0, 1

# for i in range(n):
# 	a, b = b, a+b
# 	print(a, b)
# print(a)

N = int(input())

fibo = [0 for _ in range(N+2)]

fibo[1] = 1

for i in range(2, N+2):
	fibo[i] = fibo[i-1] + fibo[i-2]
	print(fibo[i])

print(fibo[i-1])