const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
let out = document.querySelector(".out");
let out1 = document.querySelector(".out1");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let str = 0;
let str1 = " ";

//t7

let arr = [[1, 2, 3], [4, 5], [6]];

for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
        str = str + +arr[i][j];
    }
}
console.log(str);

//t6

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// btn.onclick = () => {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 != 0){
//             str += arr[i] + ' ';
//         } else {
//             console.log('odd' + ' ' + arr[i]);
//         }
//     }
//     out.innerHTML = str;
// }

//t5
// let arr = ["one", "two", "three", "four", "five", "six", "seven"];

// btn.onclick = () => {
//     console.clear();
//     str = '';
//     for (let i = 0; i < 4; i++){
//         let val = Math.floor(Math.random() * 7);
//         console.log(val);
//         str += arr[val] + ' ';
//     }
//     out.innerHTML = str;
// }

//t3,4

// let arr = ['yours', 'horse', 'my'];
// btn.onclick = () => {
//     out.innerHTML = f3();
// }
// function f3 () {
//     return arr[arr.indexOf('my')];
// }

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
