let btn = document.querySelector(".btn");
let out = document.querySelector(".out");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let str = " ";

//t5

btn.onclick = () => {
  str = " ";
  let min = +input.value;
  let max = +input1.value;
  if (min != "" && min != " " && max != '' && max != ' ') {
    while (min <= max) {
      if (min % 2 == 0) {
        str += min + "_**";
      } else {
        str += min + "_*";
      }
      min++;
    }
  } else {
      str += 'NaN';
  }
  out.innerHTML = str;
};
//t4

// btn.onclick = () => {
//     let i = 77;
//     while (i >= 35){
//         str += i + '_';
//         i = i - 3;
//     }
//     out.innerHTML = str;
// }

//t3

// btn.onclick = func();
// function func() {
//   let i = 25;
//   while (i >= 7) {
//       str += i + ' ';
//       i--;
//   }
//   out.innerHTML = str;
// }

//t2

// btn.onclick = () => {
//     let i = 0;
//     while ((i % 2 == 0) && i <= 122){
//         str += i + ' ';
//         i = i + 2;
//     }
//     out.innerHTML = str;
// };

//t1
// btn.onclick = () => {
//     let i = 0;
//     while (i <= 50) {
//         str += i + ' ';
//         i++;
//     }
//     out.innerHTML = str;
// }
