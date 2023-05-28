import sys

N = int(sys.stdin.readline())

Stack = []

for _ in range(N):
    c = sys.stdin.readline().split()
    if c[0] == 'push':
        Stack.append(c[1])
    elif c[0] =='pop':
        if Stack:
            print(Stack.pop())
        else:
            print(-1)
    elif c[0] == 'size':
        print(len(Stack))
    elif c[0] == 'empty':
        if Stack:
            print(0)
        else:
            print(1)
    elif c[0] == 'top':
        if Stack:
            print(Stack[-1])
        else:
            print(-1)
        