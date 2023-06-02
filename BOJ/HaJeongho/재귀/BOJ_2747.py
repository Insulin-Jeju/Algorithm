def fibonacci(n, number = 0, tmp = 0):
    if n == 0:
        return print(number)
    if number == 0:
        return fibonacci(n-1, 1, 0)
    new_number = number + tmp
    tmp = number
    return fibonacci(n-1, new_number, tmp)
fibonacci(int(input()))