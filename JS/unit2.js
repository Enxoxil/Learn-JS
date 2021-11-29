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

// let a = 7,
//   b = 9,
//   c = 7,
//   d = 9,
//   e = "3",
//   f = 0,
//   f1 = "hello";

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

// let headerInputName = document.querySelector(".header__input-name");
// let headerInputLastName = document.querySelector(".header__input-lastName");
// let button = document.querySelector(".button__input-name");

// button.onclick = function () {
//   let inputName = headerInputName.value;
//   let inputLastName = headerInputLastName.value;
//   console.log("Hello " + inputName + " " + inputLastName + ".");
// };

// let firtsNumber = document.querySelector(".firstNumber");
// let secondNumber = document.querySelector(".secondNumber");
//  let numberButton = document.querySelector(".numberButton");

// numberButton.onclick = function () {
//   let first = +firtsNumber.value;
//   let second = +secondNumber.value;
//   console.log(first + second);
//     numberButton.style.border = '2px solid red';
// };

// let style = document.querySelector(".numberButton");
// style.style.border = '2px solid red';

// let inputTest = document.querySelector(".test");
// let inputTest2 = document.querySelector(".test2");
// let btnTest = document.querySelector(".testbtn");

// btnTest.onclick = function () {
//     let t = inputTest.value;
//     let t2 = inputTest2.value;
//     t = parseInt(t);

//     console.log(t + +t2);
// }


let btn = document.querySelector(".btn");

btn.onclick = function () {
  let firstName = document.querySelector(".firstName").value;
  let lastName = document.querySelector(".lastName").value;
  let age = +document.querySelector(".age").value;
  let work = document.querySelector(".work").value;

  console.log(
    "Уважаемый " +
    firstName +
      " " +
      lastName +
      ", " +
      "ваш возраст " +
      age +
      " years. " +
      "Ваша профессия: " +
      work +
      "."
  );
};

