//lesson
let btn = document.querySelector(".btn");
let out = document.querySelector(".out");
let typeOf = document.querySelector(".typeof");
let password = document.querySelector(".pass");
let form = document.querySelector(".form");

let btnOnClick = (document.querySelector(".btn").onclick = (event) => {
  event.preventDefault();
  let pass = password.value;

  form.elements.input.value = "YE BABY!";

  typeOf.innerHTML = typeof form.elements.input.value;
  out.innerHTML = pass;
});
