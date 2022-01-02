const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");

let out0 = document.querySelector("#out0");
let out1 = document.querySelector("#out1");
let out2 = document.querySelector("#out2");

let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");

let str = "";
let str1 = "";

// init: start task - начало проекта
// feat: add banner - реализован новый функционал
// fix: change layout исправление
// refactor: change structure - без нового функционала и изменения поведения.
// изменил форматирование, улучшил алгоритм, переложил файлы

//t3,4,5,6

input.onkeyup = (e) => {
    
    if (
        e.keyCode == '48' ||
        e.keyCode == "49" ||
        e.keyCode == "50" ||
        e.keyCode == "51" ||
        e.keyCode == "52" ||
        e.keyCode == "53" ||
        e.keyCode == "54" ||
        e.keyCode == "55" ||
        e.keyCode == "56" ||
        e.keyCode == "57"
    ) {
        console.log(false);
    } else {
        console.log(input.value.toLowerCase());
        console.log(input.value.toUpperCase());
    }
    
};

//t1,2

// input.onkeypress = (e) => {
//     // console.log(e);
//     console.log(e.code); // в любом случае в ENG расскладке
//     console.log(e.key); // в любой расскладке
//     console.log(e.charCode); // код
//     console.log(e.keyCode); // код
//     console.log(e.which) // код
//     out0.innerHTML = e.key;
// }
