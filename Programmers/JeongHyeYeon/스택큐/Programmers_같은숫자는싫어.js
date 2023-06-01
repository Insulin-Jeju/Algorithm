function solution(arr) {
  var answer = []; //빈 배열

  //arr 배열을 순회하면서 answer에 push
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== answer[answer.length - 1]) {
      //단, answer의 마지막 요소와 동일하지 않은 경우
      answer.push(arr[i]);
    }
  }

  return answer;
}
