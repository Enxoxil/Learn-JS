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

const arr = [3, "hello", 4, "world", 5, "hi"];

btn.onclick = () => {
    const num = [];
    const strin = [];

    arr.filter( (item) => {
        if (typeof item == 'number'){
            num.push(item);
        } if (typeof item == 'string'){
            strin.push(item);
        }
    })
    console.log(num, strin);
}

//t8
// const indexes = [];
// const arr =  [3, 14, 15, 92, "6", "5", "hello", 32];
// btn.onclick = () => {
//     const arrRes = arr.filter (func);
    
//     console.log(indexes);
// }
// function func (item, index){
//     if (item % 2 == 0){
//         indexes.push(index);
//         return true;
//     }
// }

//t7

// const arr = ["php-7", "html", "css", 92, "6", "5", "hello", 32];

// btn.onclick = () => {
//     const arrRes = arr.filter (function (item){
//         if (typeof item == 'string' && item.length > 3){
//             return item;
//         }
//     })
//     console.log(arrRes);
// }

//t6
// const arr = [3, 14, 15, 92, "6", "5", "hello", 32];

// btn.onclick = () => {
//     const arrRes = arr.filter (function (item){
//         if (typeof item == 'number'){
//             return item;
//         }
//     })
//     console.log(arrRes);
// }


//t5
// const arr = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
// btn.onclick = () => {
//   const arrRes = arr.filter(function (item) {
//     if (item % 2 == 0 && typeof item == 'number') {
//       return item;
//     }
//   });
//   console.log(arrRes);
// };

//t4

// const arr = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];

// btn.onclick = () => {
//   const arrMap = arr.map(function (item) {
//     return item;
//   });
//   const arrFilter = arr.filter(function (items) {
//     if (typeof items == "number") {
//       return items;
//     }
//   });
//   console.log(arrFilter);
// };

//t3

// const arr = [4,"3",6,7,"12",34,"56",78,90,11];

// btn.onclick = () => {
//     let arrRes = arr.map(item => +item)
// console.log(arrRes);
// }

//t2

// const arr = [2,3,4,5,10,11,12];

// btn.onclick = () => {
//     let arrRes = arr.map(function(item){
//         return item ** 2;
//     })
//     console.log(arrRes);
// }
//t1

// const arr = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

// btn.onclick = () => {

//     let arrRes = arr.map(function(item){
//         return item * 2;
//     })
//     console.log(arrRes);
// }
