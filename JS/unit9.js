const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
let out = document.querySelector(".out");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let str = "";

//t6

btn.onclick = () => {
    let p = document.querySelectorAll('p').length;
    out.innerHTML = p;
}

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
