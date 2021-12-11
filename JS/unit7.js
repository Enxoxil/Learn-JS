let btn = document.querySelector(".btn");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let out = document.querySelector(".out");



//t10п

btn.onclick = () => {
    let num = input.value;
    let mun = input1.value;
    (num >= mun) ? out.innerHTML = num : out.innerHTML = mun;
}



//t8

// btn.onclick = () => out.innerHTML = input.value.trim();




//t7

// function color () {
//     let x = (Math.floor(Math.random() * (256)));
//     let y = (Math.floor(Math.random() * (256))) ;
//     let z = (Math.floor(Math.random() * (256)));
//     return `rgb(${x}, ${y}, ${z})`;
// }

// btn.onclick = () => {

// btn.style.backgroundColor = color ();

// }

//t6

// function t6(min, max) {
//   let c = min + Math.random() * (max + 1 - min);
//   console.log(c);
//   return Math.floor(c);
// }

// btn.onclick = () => {
//   out.innerHTML = t6(+input.value, +input1.value);
// };

//t5
// function t5 (name) {
//     return 'Hello ' + name;
// }
// btn.onclick = () => {
//     out.innerHTML = t5 (input.value);
// };

//t4
// function t4 (a) {
//     return 2021 - a;
// }

// btn.onclick = () => {
//     let value = input.value;
//     out.innerHTML = t4 (value);
// };

//t3
// function t3 (a, b) {
//     return a * b;
// }

// btn.onclick = () => {
//     let value = input.value;
//     out.innerHTML = t3 ( value, value);

// };

//2

// function t2 () {
//     let value = input.value;
//     return value;
// }

// btn.onclick = () => {
//     out.textContent = t2();
// };

//t1
// function f1 () {
//     let input = document.querySelector('.input').value;
//     out.innerHTML = input;
//     console.log(out);
// }
