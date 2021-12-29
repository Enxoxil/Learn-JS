const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
let out = document.querySelector(".out");
let out1 = document.querySelector(".out1");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let str = "";
let str1 = "";

// init: start task - начало проекта
// feat: add banner - реализован новый функционал
// fix: change layout исправление
// refactor: change structure - без нового функционала и изменения поведения.
// изменил форматирование, улучшил алгоритм, переложил файлы

//t9

let arr = [
  ['hi', 'mahai'],
  ['test', 'best'],
];

btn.onclick = () => {
  let str = '';
  arr.forEach(function (item){
    item.forEach(function (elem){
      str += `${elem} `;
    })
  })
  console.log(str);
};

//t8

// let arr = [1,2,66,77,15];

// btn.onclick = () => {
//   let str = arr.join('-');
//   console.log(str);
// }

//t7

// let strin = "hello world hi mazai fskfs dsfsf";

// btn.onclick = () => {
//   console.log(strin.split(" "));
// };

//t6

// let strin = "helloworld";

// btn.onclick = () => {
//     let arr = strin.split('');
//     console.log(arr);
// }

//t4,5

// let pOut = document.querySelectorAll(".out");
// let flag = false;

// btn.onclick = () => {
//   pOut.forEach(function (item) {
//     item.addEventListener("click", function () {
//       func(item.getAttribute("id"));
//     });
//   });
// };

// function func(ide) {
//   if (flag == false) {
//     document.getElementById(`${ide}`).style.boxSizing = "border-box";
//     document.getElementById(`${ide}`).style.border = "1px solid black";
//     flag = true;
//   } else {
//     document.getElementById(`${ide}`).style.boxSizing = "border-box";
//     document.getElementById(`${ide}`).style.border = "none";
//     flag = false;
//   }
// }

//t3

// const arr = [2, "hello", 3, "hi", 4, "Mazai"];

// btn.onclick = () => {
//     const array = [];
//     arr.forEach( (item) => {
//         if ( typeof item == 'number'){
//             array.push(item);
//         }
//     })
//     console.log(array);
// }

//t1,t2

// const arr = [4,5,6,7,12,34,56,78,90,11];

// btn.onclick = () => {
//     const arrRes = [];
//     const arrRos = [];
//     arr.forEach (function (item){
//         arrRos.push(item / 2);
//         arrRes.push(item * 2);
//     })
//     console.log(arrRes, arrRos);
// }
