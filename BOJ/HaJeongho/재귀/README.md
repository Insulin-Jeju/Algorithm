재귀
===

# 백준 2747번 - 피보나치 수

재귀로 풀기로 해서 재귀로 풀어봤다. 원래는 DP를 사용해야 한다고 한다.


# 백준 6996번 - 애너그램

처음에 original_strings를 이용해서 원래의 문자열을 기록하려 했지만 str이 계속 새로 들어오는 과정에서 계속 초기화가 됨.

인자에 original_strings를 추가하는 방법으로 해결했지만
예제에서는 작동하는데 백준에 제출하니 인덱스 에러가 발생

두 단어의 길이가 맞지 않을 때 string[0] 또는 string[1]을 불러와서 생기는 오류임을 깨달았다.
strings 배열의 길이가 1일 때 함수가 종료되게 했다. 
또 안되길래 확인해보니 애너그램이 아닐 때 not가 대문자임을 발견했다.

not을 NOT로 수정 후 해결