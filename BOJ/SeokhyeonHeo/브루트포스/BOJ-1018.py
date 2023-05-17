# �Է�
n, m = map(int, input().split())

board = []
result = []

for _ in range(n):
	board.append(input())

for i in range(n-7):
    for j in range(m-7):
        # 시작점이 'W'일 경우
        draw1 = 0
        # 시작점이 'B'일 경우
        draw2 = 0
        for a in range(i, i+8):
            for b in range(j, j+8):
                if (a+b) % 2 == 0:
                    if board[a][b] != 'W':
                        draw1 += 1
                    elif board[a][b] != 'B':
                        draw2 += 1
                else:
                    if board[a][b] != 'B':
                        draw1 += 1
                    elif board[a][b] != 'W':
                        draw2 += 1
        if draw1 < draw2:
            result.append(draw1)
        else:
            result.append(draw2)

min_number = 64
for k in range (len(result)):
	if min_number > result[k]:
		min_number = result[k]

print(min_number)
