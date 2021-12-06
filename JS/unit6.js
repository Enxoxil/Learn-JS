let out = document.querySelector(".out");
let strin = "";

//hl11
let btn = (document.querySelector(".btn").onclick = () => {
  strin = "";
  for (let i = 1; i <= 5; i++) {
    for(let j = 1; j <= i; j++){
      strin += `${i}   `;
    }
    strin += "<br>";
  }
  out.innerHTML = strin;
});

//hl9,10
// let btn = (document.querySelector(".btn").onclick = () => {
//   strin = "";
//   for (let i = 1; i <= 5; i++) {
//     if (i == 1){
//       strin += '_ _ _ _ ';
//     } else if (i == 2){
//       strin += '_ _ _ ';
//     } else if (i == 3){
//       strin += '_ _ ';
//     } else if (i == 4){
//       strin += '_ ';
//     } else {
//       strin += '';
//     }
//     for (let j = i; j > 0; j--) {

//       strin += `${j} `;
//     }
//     strin += "<br>";
//   }
//   out.innerHTML = strin;
// });

//hl8
// let btn = document.querySelector('.btn').onclick = () => {
//   strin = '';
//   for (let i = 5; i >= 1; i--){
//     for (let j = i; j >= 1; j--){
//       strin += `${j} `;
//     }
//     strin += '<br>';
//   }
//   out.innerHTML = strin;
// };

//hl7

// let btn = (document.querySelector(".btn").onclick = () => {
//   strin = "";
//   for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 6 && (i == 1 || i == 5); j++) {
//       strin += "*";
//     }
//     for (let g = 1; g <= 9 && i >= 2 && i <= 4; g++) {
//       if (g >= 2 && g <= 8) {
//         strin += "  ";
//       } else {
//         strin += "*";
//       }
//     }
//     strin += "<br> <br>";
//   }
//   out.innerHTML = strin;
// });

// hl 6
// loop value is UP after value is down!!!!
// let btn = (document.querySelector(".btn").onclick = () => {
//   strin = "";
//   let input = document.querySelector('.input').value;
//   for (let i = 1, j = input; i <= input; i++) {
//     for (let k = i; k <= input && k > (input/2); k++) {
//       strin += "*";
//     }
//     for (let g = i; g <= (input/2) && g > 0; g--){
//       strin += "*";
//     }
//      strin += "<br>";
//   }
//   out.innerHTML = strin;
// });

//hl 5

// let btn = (document.querySelector(".btn").onclick = () => {
//   for (let i = 3; i > 0; i--) {
//     if (i == 3) {
//       strin += `  `;
//     } else if (i == 2) {
//       strin += `  `;
//     }
//     for (let k = 0; k < 5; k++) {
//       strin += "*";
//     }
//     strin += "<br>";
//   }

//   out.innerHTML = strin;
//   console.log(strin);
// });

//hl1

// for(let i = 1; i <= 9; i++){
//     for(let k = 1; k <= 10; k++){
//         strin += `${i} * ${k} = ${i * k} <br>`;
//     }
// strin += '<hr>';
// }
// out.innerHTML = strin;

//t10
// let btn = (document.querySelector(".btn").onclick = () => {
//     strin = '';
//     for (let i = 0; i < 5; i++){
//         for (let k = 1; k <= 10; k++){
//             if ( k < 10) {
//                 strin += `${i}${k} `;
//             } else {
//                 strin += `${i+1}0`;
//             }
//         }
//     strin += '<br>';
//     }
// out.innerHTML = strin;
// });

//t9
// let btn = (document.querySelector(".btn").onclick = () => {
//     for (let i = 1; i <= 5; i++){
//         for (let k = 1; k <= i; k++){
//             strin += `${k} `;
//         }
//     strin += '<br>';
//     }
// out.innerHTML = strin;
// });

//t8

// let btn = document.querySelector('.btn').onclick = () => {
//     for (let i = 5; i > 0; i--){
//         for (let k = i; k > 0; k--){
//             strin += '*';
//         }
//     strin += '<br>';
//     }
// out.innerHTML = strin;
// };

//t7

// let btn = (document.querySelector(".btn").onclick = () => {
//   for (let i = 1; i <= 4; i++) {
//     for (let k = 1; k <= i; k++) {
//       strin += "*";
//     }
//     strin += "<br>";
//   }
//   out.innerHTML = strin;
// });

//t6
// let btn = (document.querySelector(".btn").onclick = () => {
//   for (let i = 1; i <= 3; i++) {
//     for (let k = 1; k <= 6; k++) {
//       if (k == 1 || k == 5) {
//         strin += 1;
//       } else if (k == 2 || k == 4) {
//         strin += 0;
//       } else {
//         strin += "x";
//       }
//     }
//     strin += "<br>";
//   }
//   out.innerHTML = strin;
// });

//t5

// let btn = (document.querySelector(".btn").onclick = () => {
//   for (let i = 1; i <= 3; i++) {
//     for (let k = 1; k <= 6; k++) {
//       if (k % 2 == 0) {
//         strin += 0;
//       } else {
//         strin += 1;
//       }
//     }
//     strin += "<br>";
//   }
//   out.innerHTML = strin;
// });

//t4

// let btn = document.querySelector('.btn').onclick = () => {
//     for (let i = 1; i <= 3; i++){
//         strin += i + '_';
//         for (let k = 1; k <=5; k++){
//             strin += k + ' ';
//         }
//     }
//     out.innerHTML = strin;
// };

//t3

// let btn = (document.querySelector(".btn").onclick = () => {
//   strin = "";
//   for (let i = 1; i <= 4; i++) {
//     for (let k = 1; k <= 3; k++) {
//       strin += "*_";
//     }
//     strin += "<br>";
//   }
//   out.innerHTML = strin;
// });

//t2
// let btn = document.querySelector('.btn').onclick = () => {
//     strin = '';
//     for (let i = 1; i <= 3; i++){
//         strin += i + '<br>';
//         for (let k = 1; k <= 3; k++){

//             strin += '*_';
//         }
//         strin += '<br>';
//     }
//     out.innerHTML = strin;
// };

//t1
// let btn = (document.querySelector(".btn").onclick = () => {
//   let strin = "";
//   for (let i = 1; i <= 3; i++) {
//     for (let k = 1; k <= 3; k++) {
//       strin += "*";
//     }
//     strin += "_";
//   }

//   out.innerHTML = strin;
// });
