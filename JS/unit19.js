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

//t2

btn1.onclick = (event) => {
    for (let key in event) {
        if (key == "altKey" && event[key] == true) {
            console.log(event[key]);
        }
    }
};

//t1

// function f1 (){
//     console.log(document.querySelector("#out0").textContent)
// }
// btn1.addEventListener('click', f1);
