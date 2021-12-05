let out = document.querySelector(".out");
let strin = "";

//t10
let btn = (document.querySelector(".btn").onclick = () => {
    strin = '';
    for (let i = 0; i < 5; i++){
        for (let k = 1; k <= 10; k++){
            if ( k < 10) {
                strin += `${i}${k} `;
            } else {
                strin += `${i}0`;
            }
        }
    strin += '<br>';
    }
out.innerHTML = strin;
});

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
