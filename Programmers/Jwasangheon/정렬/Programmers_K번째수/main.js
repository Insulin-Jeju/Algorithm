function solution(array, commands) {
  var answer = [];

  for (let b = 0; b < commands.length; b++) {
    const i = commands[b][0];
    const j = commands[b][1];
    const k = commands[b][2];
    const newArray = array.slice(i - 1, j).sort((a, b) => a - b);
    const a = parseInt(newArray[k - 1]);
    answer.push(a);
  }
  return answer;
}
