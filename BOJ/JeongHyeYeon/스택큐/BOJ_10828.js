const array = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const array = ['7', 'pop', 'top', 'push 123', 'top', 'pop', 'top', 'pop'];

const stack = [];
const result = [];

const length = array.shift();

for (i = 0; i < length; i++) {
  switch (array[i]) {
    case "pop":
      result.push(stack.length == 0 ? -1 : stack.pop());
      break;

    case "size":
      result.push(stack.length);
      break;

    case "empty":
      result.push(stack.length == 0 ? 1 : 0);
      break;

    case "top":
      result.push(stack.length == 0 ? -1 : stack[stack.length - 1]);
      break;

    default:
      stack.push(array[i].split(" ")[1]);
      break;
  }
}

console.log(result.join("\n"));
