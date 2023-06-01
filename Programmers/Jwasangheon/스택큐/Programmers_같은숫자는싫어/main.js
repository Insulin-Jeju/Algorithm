function solution(arr) {
  var answer = [];

  for (let i of arr) {
    if (answer.length !== 0) {
      if (answer[answer.length - 1] !== i) {
        answer.push(i);
      }
    } else {
      answer.push(i);
    }
  }

  console.log(answer);
  return answer;
}
