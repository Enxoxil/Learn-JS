const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
let out = document.querySelector(".out");
let out1 = document.querySelector(".out1");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let str = " ";
let str1 = " ";



//t20

let arr = [4,5,6,7,8,9,10];
let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
}
console.log(sum);
//t18,19
// let arr = [15,24,13,78,21,4,45,67];
// let maxx = arr[0];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > maxx){
//         maxx = arr[i];
//     };
//     if (arr[i] < min){
//         min = arr[i];
//     };

// }
// console.log(maxx, min);
//t17
// let arr = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
// let a = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 3){
//         a++;
//     }
// }
// console.log(a);

//t16
// let arr = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
// let odd = [];
// let even = [];

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 == 0){
//         odd.push(arr[i]);
        
//     } else {
//         even.push(arr[i]);
//     }
    
// }
// for (let i = 0; i < odd.length; i++){
//     str += odd[i] + '_';
// }
// for (let i = 0; i < even.length; i++){
//     str += even[i] + ' ';
// }
// out.innerHTML = str;
// out1.innerHTML = str1;
// console.log(odd);
// console.log(even);




//t15
// let arr = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//         str += arr[i] + " ";
//     }
// }
// out.innerHTML = str;

//t14
// let arr = [1, 2, 3, 'hello', 66];
// for (let i = arr.length-1; i >= 0; i--){
//     console.log(arr[i]);
//     out.innerHTML += arr[i] + ' ';
// }


//t12,13
// let arr = ['test', 'west', 'list', 'class', 'best'];
// let a = arr[0];
// arr[0] = arr[arr.length-1];
// arr[arr.length-1] = a;
// console.log(arr);
// for (let i = 0; i < arr.length; i++){
//     str += i + " " + arr[i] + " ";
// }
// out.innerHTML = str;

//t11
// let arr = [2,3,4,5,6,7];
// let num = arr[0];
// arr[0] = arr[arr.length-1];
// arr[arr.length-1] = num;
// console.log(arr);

//t10
// let arr = [100, 200, 300, 400, 700, 121];
// console.log(arr[0] + arr[arr.length-1]);


//t9
// let arr = [100, 200, 300, 400, 700, 121];
// let a = arr[arr.length-1];
// console.log(a);

//t8
// let arr = [];
// arr[3] = 3.14;
// arr[4] = 17;
// arr[6] = 5;
// console.log(arr);
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//    str += arr[i] + ' ';
// }
// console.log(str);
// console.log(arr.length);

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