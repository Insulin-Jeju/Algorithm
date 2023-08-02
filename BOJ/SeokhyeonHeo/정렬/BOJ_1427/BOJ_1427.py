number = int(input())
array = list(map(int, str(number)))

array.sort(reverse=True)
a = ''.join(map(str, array))
print(a)