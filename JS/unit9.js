const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
let out = document.querySelector(".out");
let out1 = document.querySelector(".out1");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let str = " ";

//18,19,20

btn.onclick = () => {
  str = '';
  let outs = document.querySelectorAll(".out");
  for (let i = 0; i < outs.length; i++) {

    str += outs[i].getAttribute("data") + " ";
  }
  console.log(str);
  out1.innerHTML = str;
};

//t13, 14, 15, 16, 17
// btn.onclick = () => {
//   let div = document.createElement("div");
//   div.innerHTML = "pushMe";
//   div.classList.add('newDiv');

//   div.onclick = () => {
//     div.classList.toggle("addedClass");
//   };
//    out.prepend(div);

// };

//t11,12

// btn.onclick = () => {
//   let div = document.createElement("div");
//   div.innerHTML = "25";
//   div.classList.add('addedClass');
//   out.appendChild(div);
// };
//t9,10

// let outs = document.querySelectorAll(".out");
// for (let i = 0; i <= outs.length; i++){
//     outs[i].onclick = function() {
//         outs[i].classList.toggle('addedClass');
//     }
// }
//t7,8
// btn.onclick = () => {
//   let outs = document.querySelectorAll(".out");
//   for (let i = 0; i <= outs.length; i++) {
//     outs[i].classList.toggle('addedClass');
//     outs[i].innerHTML = `It's ${i} element of massive`;
//   }
// };

//t6

// btn.onclick = () => {
//     let p = document.querySelectorAll('p').length;
//     out.innerHTML = p;
// }

//t4,5
// btn.onclick = function() {
//     this.classList.toggle('addedClass');
// }
// btn1.onclick = () => {
//     console.log(toggl());
//     function toggl() {
//         if (btn.classList.contains('addedClass')){
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

//t1,2,3

// btn.onclick = () => {
//   out.innerHTML = "out";
//   out.style.width = "200px";
//   out.style.height = "40px";
//   out.style.border = "1px solid red";
//   out.style.textAlign = "center";
//   out.classList.add("addedClass");

// };
