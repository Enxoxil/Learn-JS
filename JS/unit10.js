const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
let out = document.querySelector(".out");
let out1 = document.querySelector(".out1");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let str = " ";

//t8
let arr = [];
arr[3] = 3.14;
arr[4] = 17;
arr[6] = 5;
console.log(arr);
let sum = 0;
for (let i = 0; i < arr.length; i++){
   str += arr[i] + ' ';
}
console.log(str);
console.log(arr.length);

//t7

// let arr = ['china', 'india', 'brazil', 'japan', 'egypt'];

// arr[5] = 'italy';
// arr[6] = 'turkey';
// arr[7] = 'vietnam';
// for (let i = 0; i < arr.length; i++){
//     str += arr[i] + ' ';
// }
// out.innerHTML = str;
//t6

// let arr = ["Name", "zodiak", "month", "date"];

// out.innerHTML = arr;
//t5

// let arr = [1, 2, 3, 4, 5, 6]
// console.log(arr[0] + arr[2] + arr[3]);

// //t1 - 4
// let arr = [1, 2, 'ex', true, 5, 6, 7, 8];

// str += arr[0] + ' ' + arr[3] + ' ' + arr[arr.length - 1] + ' ';
// out.innerHTML = str;