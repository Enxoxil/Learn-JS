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

//t5
const arr = [3, 4, 5, 2, 1, 7, 8, 2, 4, 6, 8, 11, 23, 17];

function func (array){
    let ar = [];
    for (let item of array){
        if (item > 7){
            ar.push(item);
        }
    }
    return ar;
}
btn.onclick = () => {
    console.log(func(arr));
}

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
