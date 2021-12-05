let out = document.querySelector(".out");
let strin = "";

//t3

let btn = (document.querySelector(".btn").onclick = () => {
  strin = "";
  for (let i = 1; i <= 4; i++) {
    for (let k = 1; k <= 3; k++) {
      strin += "*_";
    }
    strin += "<br>";
  }
  out.innerHTML = strin;
});

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
