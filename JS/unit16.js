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

//t13

const a = 'testone';

btn.onclick = () => {
  str = '';
  for (let index of a){
    str += `${index} `;
  }
  out.innerHTML = str;
}


//t12

// const arr = [4, 5, 6, 7];

// btn.onclick = () => {
//   for (let item of arr){
//     console.log(item);
//   }
// }

//t11

// const obj = {
//   one: 11,
//   two: 7,
//   three: 13,
//   four: 0,
// };

// btn.onclick = () => {
//   str = '';
//   for (let key in obj){
//     if (obj[key] > 10){
//       str += `${obj[key]} `;
//     }
//   }
//   out.innerHTML = str;
// }

//t10

// const arr = [4, 6, 9, 'Hello'];
// const obj = {};
// btn.onclick = () => {
//   for (let i = 0; i < arr.length; i++){
//     obj[arr[i]] = arr[i];
//   }
//   console.log(obj);
// }

//t9

// const arr = [
//   [4, 3, 2],
//   [2, 5],
//   [0, 0, 0, 0, 0],
// ];

// btn.onclick = () => {
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > index) {
//       index = arr[i].length - 1;
//     }
//   }
//   console.log(index);
// };

//t7,t8

// const arr = [
//   { id: 23, name: "Ivan" },
//   { id: 45, name: "Petr" },
//   { id: 43, name: "Vasya" },
//   { id: 42, name: "Vetal" },
//   { id: 40, name: "Bosh" },
//   { id: 49, name: "Pors" },
//   { id: 35, name: "Else" },
//   { id: 67, name: "Lele" },
//   { id: 19, name: "Lulu" },
//   { id: 10, name: "Pepe" },
// ];

// btn.onclick = () => {
//   let array = [];
//   let obj = {};
//   let keys = [];
//   let values = [];
//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i].id] = arr[i].name;
//     array = Object.keys(obj);
//   }
//   console.log(obj);
//   console.log(array);
// };

//t6
// const a6 = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// btn.onclick = () => {
//   let arr = [];
//   let count = 0;
//   for (let i = 0; i < a6.length; i++) {
//     for (let j = 0; j < a6[i].length; j++) {
//       arr[count] = a6[i][j];
//       count++;
//     }
//   }

//   console.log(arr);
// };

//t5
// const arr = [3, 4, 5, 2, 1, 7, 8, 2, 4, 6, 8, 11, 23, 17];

// function func (array){
//     let ar = [];
//     for (let item of array){
//         if (item > 7){
//             ar.push(item);
//         }
//     }
//     return ar;
// }
// btn.onclick = () => {
//     console.log(func(arr));
// }

//t3,t4

// btn.onclick = () => {
//   let arr = document.querySelectorAll(".out");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].innerHTML = 323;
//   }
// };

//t1,t2
// const arr = [5, 7, 9, 11, 13, 15];

// btn.onclick = () => {
//     for (let i = 0; i < arr.length; i++){
//         str += `${i} - ${arr[i]}, `;
//     }
//     out.innerHTML = str;
// }
