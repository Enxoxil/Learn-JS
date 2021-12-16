const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
let out = document.querySelector(".out");
let out1 = document.querySelector(".out1");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let str = "";
let str1 = " ";

//t16
let d16 = [];
let d161 = [5,6,7,8,9];
let d162 = [23,24,56,87];

d16 = d161.concat(d162);
console.log(d16);


//t15 
// let arr = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

// btn.onclick = () => {
//   let a = arr.indexOf(+input.value);
//   console.log(a);
//   if (a == -1){
//     arr.push(+input.value);
//   } else {
//     console.log(a);
//   }
//   console.log(arr);
// }


//t14

// let arr = [];

// btn.onclick = () => {
//   for (let i = 0; i < +input.value; i++) {
//     arr.push(1);
//   }
//   console.log(arr);
// };

//t13
// let arr = [6, 0, 22, 1, 4, 76];
// let arr2 = [];

// btn.onclick = () => {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     rev(i);
//     console.log(arr2);
//   }
// };
// function rev(i) {
//   let a = arr[i];
//   arr2.push(a);
// }

//t11

// let arr = [2, 3, 4, 5, 6, 7];

// btn.onclick = () => {
//   str = "";
//   let a = arr.indexOf(+input.value);

//   if (arr[a] != -1) {
//     console.log(a);
//   } else {
//     console.log(input.value);
//   }
// };

//t10

// let arr = [3,14,15,92,6];

// btn.onclick = () => {
//     arr.reverse();
//     console.log(arr);
// }
//t9

// let arr = [100, 200, 300, 400, 700, 121];

// btn.onclick = () => {
// console.log(arr);
// delete arr[0];
// }

//t8

// let arr = [2,'4', 12, 67, 'hello'];

// btn.onclick = () => {
//     str = '';
//     arr[0] = input.value;

//     for (let i = 0; i < arr.length; i++){
//         str += arr[i] + " ";
//     }
//     out.innerHTML = str;
//     console.log(arr);
//     input.value = '';
// }

//t7
// let arr = ['china', 'india', 'brazil', 'japan', 'egypt'];

// btn.onclick = () => {
//     arr.pop();
//     str = ' ';
//     outer ();
// }
// function outer (){
//     for (let i = 0; i < arr.length; i++){
//         str += arr[i] + ' ';
//     }
//     out.innerHTML = str;
// }

//t6
// let arr = [];
// btn.onclick = () => {
//   str = "";
//   outer();
//   out.innerHTML = str;
//   console.log(arr);
// };

// function outer() {
//   arr[arr.length] = input.value;
//   str += arr;
// }

//t3,t4

// let arr = [33, "best", 66, "best"];
// btn.onclick = () => {

//   arr.unshift(input.value);
//   console.log(arr);
//   outer();
//   input.value = "";
// };
// function outer() {
//   str = " ";
//   for (let i = 0; i < arr.length; i++) {
//     str += arr[i] + " ";
//   }
//   out.innerHTML = str;
// }

//t2

// let arr = [33, "best", 66, "best"];
// btn.onclick = () => {
//   arr.pop();
//   console.log(arr);
//   outer();
//   input.value = "";
// };
// function outer() {
//   str = " ";
//   for (let i = 0; i < arr.length; i++) {
//     str += arr[i] + " ";
//   }
//   out.innerHTML = str;
// }

//t1

// let arr = [33, "best", 66, "best"];

// btn.onclick = () => {
//   if (input.value != "" && input.value != " ") {
//     arr.push(input.value);
//     console.log(input.value);
//     outer();
//   }

//   input.value = "";
// };
// function outer() {
//   str = " ";
//   for (let i = 0; i < arr.length; i++) {
//     str += arr[i] + " ";
//   }
//   out.innerHTML = str;
// }
