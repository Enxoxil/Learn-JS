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


//t3

const arr = [2, "hello", 3, "hi", 4, "Mazai"];

btn.onclick = () => {
    const array = [];
    arr.forEach( (item) => {
        if ( typeof item == 'number'){
            array.push(item);
        }
    })
    console.log(array);
}

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