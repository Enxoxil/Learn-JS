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

btn.onclick = () => {
  if (button.checked){
    out.innerHTML = button.value ;
  } else {
    out.innerHTML = 'false';
  }
};
