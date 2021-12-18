const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
let out = document.querySelector(".out");
let out1 = document.querySelector(".out1");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let str = "";
let str1 = "";

//t2

let a2 = {
    "one" : "hello",
    "two" : "mahai",
    "five" : "hi"
    };

btn.onclick = () => {
    str += func (input.value) + ' ';
    input.value = '';
    out.innerHTML = str;
    str = '';

}

function func (valu){
    let prt = 0;
    for (let key in a2){
        if (a2[key] == valu){
            console.log(a2[key]);
            prt = a2[key];
        } else {
            console.log('Loose...!')
            prt = 'Loose...!'
        }
    }
    return prt;
}

// //t1

// let a1 = {
//   'one': 15,
//   two: 16,
//   five: 20,
//   1: 123,
// };
// btn.onclick = () => {
//   str += func(input.value) + " ";
//   out.innerHTML = str;
// };

// function func(valu) {
//   return a1[valu];
// }
