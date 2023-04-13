function solution(citations) {
  let h = 0;

  while (true) {
    let big = 0;
    let small = 0;
    citations.forEach((element) => {
      if (element >= h) {
        big++;
      } else {
        small++;
      }
    });
    if (!(big >= h && h >= small)) {
      break;
    }
    h++;
  }
  var answer = h - 1;
  return answer;
}
