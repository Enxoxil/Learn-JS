const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
let out = document.querySelector(".out");
let out1 = document.querySelector(".out1");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let str = " ";

//t1
let arr = [1, 2, 'ex', true, 5, 6, 7, 8];

str += arr[0] + ' ' + arr[3] + ' ' + arr[arr.length - 1] + ' ';
out.innerHTML = str;