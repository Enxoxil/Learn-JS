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

//t8

const set = new Set([
  1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56,
  4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56,
]);


btn.onclick = () => {
  const arr = [];
  let zero = 0;
  for (let sets of set){
    if (sets > 5){
      arr.push(sets);
    }
    
  }
  console.log(arr);

}

//t7

// let set = new Set();

// input.onchange = () => {
//   if (input.value.length != 0) {
//     set.add(input.value);
//     input.value = "";
//     console.log(set.size);
//   }

//   if (set.size > 6) {
//     btn.removeAttribute("disabled");
//     btn.onclick = () => {
//       for (let key of set) {
//         str += key + " ";
//       }
//       out.innerHTML = str;
//     };
//   }
//   if (set.size <= 6) {
//     btn.setAttribute("disabled", 0);
//   }
// };

//t4,t5

// let set = new Set();
// btn.onclick = () => {
//   if (input.value.length != 0) {
//     set.add(input.value);
//     console.log(set);
//     input.value = "";
//   }
//   if (input1.value.length != 0) {
//     if (set.has(input1.value)) {
//       console.log(set.size);
//       console.log(set);
//     }
//   }
// };

//t3

// let set = new Set();
// btn.onclick = () => {
//     if (input.value.length != 0){
//         set.add(input.value);
//         input.value = '';
//         console.log(set);
//     };
//     if (input1.value.length != 0){
//         set.delete(input1.value);
//         console.log(set);
//         input1.value = '';
//     }
// }

//t1,t2

// let sat = new Set();
// btn.onclick = () => {
//   sat.add(input.value);
//   input.value = "";
//   console.log(sat);
// };
