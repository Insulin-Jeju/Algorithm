const index = 0;
const array = [0, 1];
function pibo(n, index = 0) {
  const nextNum = array[index] + array[index + 1];

  if (index >= n - 1) {
    return;
  }

  if ((n = 0)) {
    return array[0];
  }
  if ((n = 1)) {
    return array[1];
  }

  array.push(nextNum);
  //console.log(array);
  pibo(n, index + 1);
  return array[array.length - 1];
}

console.log(pibo());
