def repaint(board, start_row, start_col, color):
    repaint_count = 0
    for i in range(start_row, start_row+8):
        for j in range(start_col, start_col+8):
            if (i+j) % 2 == 0:
                if board[i][j] != color:
                    repaint_count += 1
            else:
                if board[i][j] == color:
                    repaint_count += 1
    return repaint_count

n, m = map(int, input().split())
board = [input() for _ in range(n)]

min_count = n * m
for i in range(n-7):
    for j in range(m-7):
        min_count = min(min_count, repaint(board, i, j, 'W'))
        min_count = min(min_count, repaint(board, i, j, 'B'))

print(min_count)