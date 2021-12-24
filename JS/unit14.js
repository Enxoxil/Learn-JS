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

//t4,t5

let set = new Set();
btn.onclick = () => {
  if (input.value.length != 0) {
    set.add(input.value);
    console.log(set);
    input.value = "";
  }
  if (input1.value.length != 0) {
    if (set.has(input1.value)) {
      console.log(set.size);
      console.log(set);
    }
  }
};

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
