//lesson
let btn = document.querySelector(".btn");
let out = document.querySelector(".out");
let typeOf = document.querySelector(".typeof");
let input = document.querySelector(".input");
let form = document.querySelector(".form");
let button = document.querySelector(".button");

// let btnOnClick = (document.querySelector(".btn").onclick = (event) => {
//   event.preventDefault();
//   let pass = password.value;

//   form.elements.input.value = "YE BABY!";

//   typeOf.innerHTML = typeof form.elements.input.value;
//   out.innerHTML = pass;
// });

//u4 t1

// btn.onclick = () => {
//   alert(1);
// };

//t4

// btn.onclick = () => {
//   if (button.checked){
//     out.innerHTML = 'true';
//   } else {
//     out.innerHTML = 'false';
//   }
// };

//t5
//t6,7
// btn.onclick = (event) => {
//   event.preventDefault();
//   if (button.value.length >= 6) {
//     out.innerHTML = 1;
//   } else {
//     out.innerHTML = 0;
//   }
// };

//t8

// btn.onclick = (event) => {
//   event.preventDefault();
//   out.innerHTML =
//     '<input type="text" class="i-81"><button class="b-81">GO</button>';
//   let b81 = (document.querySelector(".b-81").onclick = (event) => {
//     event.preventDefault();
//     let i81 = document.querySelector(".i-81").value;
//     typeOf.innerHTML = i81;
//   });
// };
//t9
// btn.onclick = (event) => {
//   event.preventDefault();
//   if (input.checked) {
//     out.innerHTML = input.value;
//   } else {
//     out.innerHTML = 0;
//   }
// };
//t10,11
// btn.onclick = (event) => {
//   event.preventDefault();
//   btn.style.backgroundColor = document.querySelector('.color').value;
//   document.querySelector('.color1').value = document.querySelector('.color').value;
// };
//t12
// btn.onclick = (event) => {
//   event.preventDefault();
//   out.innerHTML = document.querySelector('.date').value;
// };
//t13
// document.querySelector(".range").oninput = (event) => {
//   event.preventDefault();
//   let range =document.querySelector(".range");
//   out.innerHTML = range.value;
// };
//14,15
// btn.onclick = () => {
//   document.querySelector('.textarea').value = button.value;
//   out.innerHTML = button.value;
// };

//16
// btn.onclick = () => {
//   out.innerHTML = document.querySelector('.select').value;
// };
//17

// document.querySelector('.select').onchange = () => {
//   out.innerHTML = document.querySelector('.select').value;
// };
//18
// document.querySelector('.select').onchange = () => {
//   document.querySelector('.textarea').value = document.querySelector('.select').value;
// };

//19
btn.onclick = (event) => {
  event.preventDefault();
  out.innerHTML = document.querySelector('.textarea').value + ' ' + document.querySelector('.button').value;
};