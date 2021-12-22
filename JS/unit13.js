const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
let out = document.querySelector(".out");
let out1 = document.querySelector(".out1");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let str = "";
let str1 = "";

//t18
const arr = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota" , "Klovska", "Vidubichi"],
};

btn.onclick = () => {
  let flag = true;
  for (let key in arr) {
    if (key.toLowerCase() == input.value.toLowerCase()) {
      console.log(arr[key]);
      flag = false;
    }
    for (let i = 0, p = 0; i < arr[key].length; i++, p++) {
      if (arr[key][i].toLowerCase() == input.value.toLowerCase()) {
        console.log(key, arr[key]);
        flag = false;
      }
    }
  }
  if (flag){
    console.log(false);
  }
};
//t16,17
// const arr = {
//   iis8sj: {
//     names: "Ivan",
//     age: 27,
//   },
//   iiss7j: {
//     names: "Petr",
//     age: 26,
//   },
//   s3s8sj: {
//     names: "Serg",
//     age: 47,
//   },
// };

// btn.onclick = () => {

//   for (let i in arr) {
//        if (arr[i]["age"] > 30){
//           console.log(arr[i]["names"]);
//       }
//     }
// };

//t15

// const arr = {
// 	'prim': [1, 2, 23],
// 	'one': [3, 4, 5],
// 	'testt': [6, 7, 8],
// 	'ivan': [9, 10]
// };

// btn.onclick = () => {
//     for (let i in arr){
//         for (let k = 0; k < arr[i].length; k++){
//             str += `${arr[i][k]} `;
//         }
//     }
//     out.innerHTML = str;
// }

//t14

// const arr = {
// 	'prim': [1, 2, 23],
// 	'one': [3, 4, 5],
// 	'testt': [6, 7, 8],
// 	'ivan': [9, 10]
// };

// btn.onclick = () => {
//     for (let i in arr){
//         str += arr[i][0] + ' ';
//     }
//     console.log(str);
// }
//t13

// const arr = {
//   b: 17,
//   e: 21,
//   j: 19,
//   k: 22,
//   d: 54,
// };

// btn.onclick = () => {
//     let sum = 0;
//     for (let i in arr){
//         sum += arr[i];
//     }
//     console.log(sum);
// }

//t12

// const arr = {
//   b: 17,
//   e: 21,
//   j: 19,
//   k: 22,
//   d: 54,
// };

// btn.onclick = () => {
//   let arrValues = Object.values(arr).indexOf(+input.value);
//   let arrKeys = Object.keys(arr);
//   delete arr[arrKeys[arrValues]];
//   func(arr, out);
// };
// function func(arr, block) {
//   str = "";
//   for (let i in arr) {
//     str += `${i} ${arr[i]} <br>`;
//   }
//   block.innerHTML = str;
// }

//t11

// const arr = {
//   'b': 17,
//   'e': 22,
//   'j': 17,
//   'k': 22,
//   'd': 54,
// };

// btn.onclick = () => {
//   str += '';
//   delete arr[input.value];
//   console.log(arr);
// }
//t10

// const array = {
//   b: 17,
//   e: 22,
//   j: 17,
//   k: 22,
//   d: 54,
// };

// btn.onclick = () => {
//   let a = input.value;
//   func(array, a);
//   console.log(str);
// };

// function func(arr, values) {
//   let p = 0;
//   for (let i in arr) {
//     if (arr[i] == values) {
//       str = `True`;
//     } else {
//       p++;
//       if (p == Object.values(arr).length) {
//         str = `false`;
//       }
//     }
//   }
// }

//t9

// const arr = {
//   b: 17,
//   e: 22,
//   j: 17,
//   k: 22,
//   d: 54,
// };

// btn.onclick = () => {
//   str = "";
//   let arrays = Object.values(arr);
//   let keys = Object.keys(arr);

//   for (let i = 0; i < arrays.length; i++) {
//     if (arrays[i] == input.value) {
//       str += `${keys[i]} `;
//     } else {
//       str += "";
//     }
//   }
//   out.innerHTML = str;
// };

//t7,8

// let arr = {
//   a: "1",
//   b: "2",
//   c: "3",
// };

// btn.onclick = () => {
//   str = "";
//   if (Object.keys(arr).indexOf(input.value) != -1) {
//     str += `Есть такое, это ${arr[input.value]}`;
//   } else {
//     str += "Нет такого";
//   }
//   out.innerHTML = str;
// };

//t6
// const array = {};
// function func (arr, block) {
//   str = '';
//   for (let i in arr){
//     str += `${i} ${arr[i]} <br>`;
//   }
//   block.innerHTML = str;
// }
// btn.onclick = () => {
//   let key = input.value;
//   let valu = input1.value;
//   input.value = '';
//   input1.value = '';
//   array[key] = valu;

//   func(array, out);
//   console.log(array);
// }

//t5

// const a3 = {
// 	"one": "hello",
// 	"two": "mahai",
// 	"five": "hi",
// 	"test": 21,
// 	"odd": "hi",
// 	"mix": "mix"
// };

// function func (arr, block) {
//   str = '';
//   for (let i in arr){
//     str += `${i} ${a3[i]} <br>`;
//   }
//   block.innerHTML = str;
// }

// btn.onclick = () => {
//   func (a3, out)
// }

// //t4
// const a3 = {
// 	"one": "hello",
// 	"two": "mahai",
// 	"five": "hi",
// 	"test": 21,
// 	"odd": "hi",
// 	"mix": "mix"
// };

// btn.onclick = () => {
//   str = '';
//   for (let i in a3) {
//     str += `${i} ${a3[i]} <br>`
//   }
//   out.innerHTML = str;
// }

//t2,3

// let a2 = {
//   one: "hello",
//   two: "mahai",
//   five: "hi",
// };

// btn.onclick = () => {
//   str += func(input.value) + " ";
//   input.value = "";
//   out.innerHTML = str;
//   str = "";
// };

// function func(valu) {
//   let prt = 0;
//   for (let key in a2) {
//     if (a2[key] == valu) {
//       console.log(a2[key]);
//       prt = a2[key];
//     } else {
//       console.log("Loose...!");
//       prt = "Loose...!";
//     }
//   }
//   return prt;
// }

// //t1

// let a1 = {
//   'one': 15,
//   two: 16,
//   five: 20,
//   1: 123,
// };
// btn.onclick = () => {
//   str += func(input.value) + " ";
//   out.innerHTML = str;
// };

// function func(valu) {
//   return a1[valu];
// }
