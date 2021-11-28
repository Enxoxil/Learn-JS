"use strict";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for ( let value of arr){
//     console.log(value);
// }

// for (let i = 0; i < arr.length; i++ ){
//     console.log(arr[i]);
// }

console.log(arr.length);

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});
