const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
let out = document.querySelector(".out");
let out1 = document.querySelector(".out1");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let str = "";
let str1 = " ";


//t3

let arr = ['yours', 'horse', 'my'];
btn.onclick = () => {
    out.innerHTML = f3();
}
function f3 () {
    return arr[arr.indexOf('my')];
}

//t2
// let arr = ["nice", "hello", "hi"];

// btn.onclick = () => {
//   out.innerHTML = arr[arr.indexOf("hi")];
// };

//t1
// let arr = [11, 22, 33, 44, 55];
// btn.onclick = () => {
//     out.innerHTML = arr[arr.indexOf(55)];

// }
