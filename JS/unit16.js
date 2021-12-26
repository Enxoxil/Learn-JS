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
const arr = [5, 7, 9, 11, 13, 15];

btn.onclick = () => {
    for (let i = 0; i < arr.length; i++){
        str += `${i} - ${arr[i]}, `;
    }
    out.innerHTML = str;
}

