// let headerInput = document.querySelector(".header__input");
// let button = document.querySelector("button");
// let div = document.querySelector(".out");
// button.onclick = function () {
//   console.log("Worked");
//   let headerInputValue = +headerInput.value;
//   console.log(headerInputValue + 10);
//   div.innerHTML = headerInputValue;
//   headerInput.value = "";
// };

let a = 7, 
    b = 9,
    c = 7,
    d = 9,
    e = '3',
    f = 0,
    f1 = 'hello';

// console.log(a * b);
// console.log(c / d);
// console.log(c + d);
// console.log(e + d);
// console.log(c / f);
// console.log(c * f1);

// let input = document.querySelector(".header__input");
// let button = document.querySelector(".button__input");
// button.onclick = function () {
//     let inputValue = +input.value;
//     console.log(inputValue*10);
//     input.value = '';
// }

let headerInputName = document.querySelector(".header__input-name");
let headerInputLastName = document.querySelector(".header__input-lastName");
let button = document.querySelector(".button__input-name");

button.onclick = function () {
    let inputName = headerInputName.value;
    let inputLastName = headerInputLastName.value;
    console.log('Hello ' + inputName + ' ' + inputLastName + '.');
}





