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
let strin = "";
let btn = (document.querySelector(".btn").onclick = () => {
  if (strin == "") {
    for (let i = 0; i <= 50; i++) {
      strin += i + " ";
    }
    console.log('noclear');
    document.querySelector(".out").innerHTML = strin;
  } else {
      strin = '';
      for (let i = 0; i <= 50; i++) {
        strin += i + " ";
      }
      console.log('clear');
      document.querySelector(".out").innerHTML = strin;
  }
  
});
