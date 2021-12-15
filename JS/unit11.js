const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
let out = document.querySelector(".out");
let out1 = document.querySelector(".out1");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let str = " ";
let str1 = " ";


//t3

let arr = [33, "best", 66, "best"];
btn.onclick = () => {
  arr.shift();
  console.log(arr);
  outer();
  input.value = "";
};
function outer() {
  str = " ";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i] + " ";
  }
  out.innerHTML = str;
}

//t2

// let arr = [33, "best", 66, "best"];
// btn.onclick = () => {
//   arr.pop();
//   console.log(arr);
//   outer();
//   input.value = "";
// };
// function outer() {
//   str = " ";
//   for (let i = 0; i < arr.length; i++) {
//     str += arr[i] + " ";
//   }
//   out.innerHTML = str;
// }

//t1

// let arr = [33, "best", 66, "best"];

// btn.onclick = () => {
//   if (input.value != "" && input.value != " ") {
//     arr.push(input.value);
//     console.log(input.value);
//     outer();
//   }

//   input.value = "";
// };
// function outer() {
//   str = " ";
//   for (let i = 0; i < arr.length; i++) {
//     str += arr[i] + " ";
//   }
//   out.innerHTML = str;
// }
