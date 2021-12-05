let out = document.querySelector(".out");
let strin = "";

//t5

let btn = (document.querySelector(".btn").onclick = () => {
  for (let i = 1; i <= 3; i++) {
    for (let k = 1; k <= 6; k++) {
      if (k % 2 == 0) {
        strin += 0;
      } else {
        strin += 1;
      }
    }
    strin += "<br>";
  }
  out.innerHTML = strin;
});

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
