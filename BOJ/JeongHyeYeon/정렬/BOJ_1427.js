const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split(""); //['1','3','2']

const inputNum = input.map((e) => Number(e)); //[1,3,2] //배열요소 돌기->map
inputNum.sort((a, b) => b - a); //[3,2,1] //내림차순

const order = Number(inputNum.join(""));
console.log(order); //321 //숫자형태로 배열요소 순서대로 출력

/*

(수정전 코드 - join 사용 전)
var order = inputNum[0];
for(i=1; i<inputNum.length; i ++){
    order += String(inputNum[i]);
}
*/
