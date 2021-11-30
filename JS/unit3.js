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

// btn.onclick = function () {
//     let select = +document.querySelector('.select').value;
//     let out = document.querySelector('.out');
//     switch (select) {
//         case 1:
//             out.innerHTML = 'one';
//             break;
//         case 2:
//             out.innerHTML = 'two';
//             break;
//         case 3:
//             out.innerHTML = 'three';
//             break;
//         default:
//             out.innerHTML = 'null';
//             break;
//     }
// };


btn.onclick = function () {
    let input = document.querySelector('.input').value;
    let out = document.querySelector('.out');

    if (input >= 1 && input <= 32){
        out.innerHTML = 1;
    } else if (input >= 33 && input <= 43){
        out.innerHTML = 2;
    } else if (input >= 44 && input <= 64){
        out.innerHTML = 3;
    } else {
        out.innerHTML = 0;
    }
};

