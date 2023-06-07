n = int(input())

def anagram(str, original_strings):
    strings = str.split()
    if len(strings) == 1:
        return print(original_strings[0] + " & " + original_strings[1] + " are NOT anagrams.")
    if strings[0][0] in strings[1]:
        new_str = strings[0].replace(strings[0][0], '', 1) + " " + strings[1].replace(strings[0][0], '', 1)
        if len(new_str) == 1:
            return print(original_strings[0] + " & " + original_strings[1] + " are anagrams.")
        anagram(new_str, original_strings)
    else:
        return print(original_strings[0] + " & " + original_strings[1] + " are NOT anagrams.")

for _ in range(n):
    input_str = input()
    original_strings = input_str.split()
    anagram(input_str, original_strings)