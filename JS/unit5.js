//loop

// let btn = document.querySelector('.btn').onclick = () => {
//     let r = document.querySelectorAll('input[type="radio"]');
//     console.log(r);
//     for (let i = 0; i < r.length; i++) {
//         if (r[i].checked) {
//             console.log(r[i].value);
//         }
//     }
// };

//homework

//t1
// let strin = "";
// let btn = (document.querySelector(".btn").onclick = () => {
//   if (strin == "") {
//     for (let i = 0; i <= 50; i++) {
//       strin += i + " ";
//     }
//     console.log('noclear');
//     document.querySelector(".out").innerHTML = strin;
//   } else {
//       strin = '';
//       for (let i = 0; i <= 50; i++) {
//         strin += i + " ";
//       }
//       console.log('clear');
//       document.querySelector(".out").innerHTML = strin;
//   }

// });

//t2
// let strin = "";
// let btn = (document.querySelector(".btn").onclick = () => {
//   if (strin == "") {
//     for (let i = 0; i < 123; i = i + 2) {
//       strin += i + " ";
//     }
//   } else {
//     strin = "";
//     for (let i = 0; i < 123; i = i + 2) {
//       strin += i + " ";
//     }
//   }
//   let out = (document.querySelector(".out").innerHTML = strin);
// });

//t3

// let strin = "";
// let btn = (document.querySelector(".btn").onclick = () => {
//   for (let i = 25; i > 6 ; i--) {
//     strin += i + " ";
//   }
//   let out = (document.querySelector(".out").innerHTML = strin);
// });

//t4
// let strin = " ";
// let btn = (document.querySelector(".btn").onclick = () => {
//   if (strin == " ") {
//     for (let i = 77; i >= 35 && i < 78; i = i - 3) {
//       strin += i + "_";
//     }
//   } else {
//     strin = " ";
//     for (let i = 77; i >= 35 && i < 78; i = i - 3) {
//       strin += i + "_";
//     }
//   }
//   let out = (document.querySelector(".out").innerHTML = strin);
// });
//t5
// let strin = " ";
// let btn = (document.querySelector(".btn").onclick = () => {
//   if (strin == " ") {
//     for (let i = 0; i <= 17; i++) {
//       if (i % 2 == 0) {
//         strin += i + "_**";
//       } else {
//         strin += i + "_*";
//       }
//     }
//   } else {
//     strin = " ";
//     for (let i = 0; i <= 17; i++) {
//       if (i % 2 == 0) {
//         strin += i + "_**";
//       } else {
//         strin += i + "_*";
//       }
//     }
//   }
//   let out = (document.querySelector(".out").innerHTML = strin);
// });

//t6
// let strin = "";
// let out = document.querySelector(".out");
// let btn = (document.querySelector(".btn").onclick = () => {
//   let i = document.querySelector(".input").value;
//   if (strin == "") {
//     for (let x = 0; x <= i - 1 && i < 10; x++) {
//       strin += "******";
//       strin += "<br>";
//     }
//   } else {
//     strin = "";
//     for (let x = 0; x <= i - 1 && i < 10; x++) {
//       strin += "******";
//       strin += "<br>";
//     }
//   }
//   out.innerHTML = strin;
// });

//t7

// let strin = "";
// let out = document.querySelector(".out");
// let btn = (document.querySelector(".btn").onclick = () => {
//   let input = document.querySelector(".input").value;
//   if (strin == "") {
//     for (let i = input; i >= 0; i--) {
//       strin += i + " ";
//     }
//   } else {
//     strin = "";
//     for (let i = input; i >= 0; i--) {
//       strin += i + " ";
//     }
//   }
//   out.innerHTML = strin;
// });

//t8,9 + bonus
// let strin = "";
// let btn = (document.querySelector(".btn").onclick = () => {
//   let input = document.querySelector(".input").value;
//   let input1 = document.querySelector(".input1").value;
//   if (strin == "") {
//     if (input1 > input) {
//       for (let i = input; i <= input1; i++) {
//         strin += i + " ";
//       }
//     } else {
//       for (let i = input; i >= input1; i--) {
//         strin += i + " ";
//       }
//     }
//   } else {
//     strin = "";
//     if (input1 > input) {
//       for (let i = input; i <= input1; i++) {
//         strin += i + " ";
//       }
//     } else {
//       for (let i = input; i >= input1; i--) {
//         strin += i + " ";
//       }
//     }
//   }
//   let out = (document.querySelector(".out").innerHTML = strin);
// });


//t10

// let btn = document.querySelector('.btn').onclick = () => {
//   let strin = '';
//   for (let i = 1950; i <= 2000; i += 2) {
//     strin += i + ' ';
//   }
//   let out = document.querySelector('.out').innerHTML = strin;
// };

//t11,12

let btn = document.querySelector('.btn').onclick = () => {
  let div = document.querySelectorAll('.div');
  let strin = '';
  for (let i = 0; i < div.length; i++){
    strin += div[i].innerHTML + ' ';
    div[i].style.background = 'orange';
  }
  let out = document.querySelector('.out').innerHTML = strin;
};