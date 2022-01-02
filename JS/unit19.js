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


//t10,11,12,13

out1.onmouseover = () => {
    out1.classList.add('active');
    out1.classList.remove('nonactive');
    out1.onmousedown = () => {
        out1.classList.add('border');
    }
    out1.onmouseup = () => {
        out1.classList.remove('border');
    }
};
out1.onmouseout = () => {
    out1.classList.remove('active');
    out1.classList.add('nonactive');
}

//t9

// out1.onclick = (event) => {
//   event.srcElement.style.backgroundImage = "url(../img/second.png)";
//   console.log(event);
// };

//t8

// let check = document.querySelector("#checkbox");
// let outs = document.querySelectorAll(".out");
// check.onchange = () => {
//     for (let key of outs) {
//         key.oncontextmenu = () => {
//             if (check.checked){
//               console.log(true);
//               return false;
//             }
//         };
//     }
// };

//t6,7

// out0.oncontextmenu = () => {
//   out0.classList.toggle('active');
//   return false;
// }

//t5

// out0.ondblclick = () => {
//   out0.classList.toggle('active');
// }

//t4

// out0.ondblclick = () => {
//   console.log(out0.textContent);
// }

//t3
// let e = document.querySelector('#out2');
// let w = window.getComputedStyle(e).width;
// w = parseFloat(w);
// e.onclick = () => {

//   e.style.width = w + 'px';
//   w++;
//   e.textContent = w;
// }

//t2

// btn1.onclick = (event) => {
//     for (let key in event) {
//         if (key == "altKey" && event[key] == true) {
//             console.log(event[key]);
//         }
//     }
// };

//t1

// function f1 (){
//     console.log(document.querySelector("#out0").textContent)
// }
// btn1.addEventListener('click', f1);
