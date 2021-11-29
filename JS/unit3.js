const btn = document.querySelector(".btn");

// btn.onclick = function () {
//     let input = +document.querySelector(".age").value;
//     let out = document.querySelector('.out');
//     if (input == 4) {
//         out.innerHTML = true;
//     } else {
//         out.innerHTML = false;
//     }
// };

// btn.onclick = function () {
//   let out = document.querySelector(".out");
//   let a = document.querySelector(".input3").value;
//   let b = document.querySelector(".input4").value;
//   if (a > b) {
//     out.innerHTML = a;
//   } else {
//     out.innerHTML = b;
//   }
// };

btn.onclick = function () {
    let input = +document.querySelector('.input').value;
    let out = document.querySelector('.out');
    console.log(input);
    if ((2021 - input) >= 18) {
        out.innerHTML = 1;
    } else {
        out.innerHTML = 0;
    }
};