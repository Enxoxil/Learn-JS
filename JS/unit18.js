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

//t1

const arr = [4,5,6,7,12,34,56,78,90,11];

btn.onclick = () => {
    const arrRes = [];
    const arrRos = [];
    arr.forEach (function (item){
        arrRos.push(item / 2);
        arrRes.push(item * 2);
    })
    console.log(arrRes, arrRos);
}