const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
let out = document.querySelector(".out");
let out1 = document.querySelector(".out1");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let str = "";
let str1 = "";

//t1

let a1 = {
  'one': 15,
  two: 16,
  five: 20,
  1: 123,
};
btn.onclick = () => {
  str += func(input.value) + " ";
  out.innerHTML = str;
};

function func(valu) {
  return a1[valu];
}
