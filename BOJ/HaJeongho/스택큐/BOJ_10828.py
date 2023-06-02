count = int(input())
stack = []
for _ in range(count):
    command = input().split()
    if command[0] == 'push':
        stack.append(command[1])
    elif command[0] == 'pop':
        if stack == []:
            print(-1)
        else:
            print(stack.pop())
    elif command[0] == 'size':
        print(len(stack))
    elif command[0] == 'empty':
        if stack == []:
            print(1)
        else:
            print(0)
    elif command[0] == 'top':
        if stack == []:
            print(-1)
        else:
            print(stack[-1])