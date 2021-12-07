let btn = document.querySelector('.btn');
let input = document.querySelector('.input');
let out = document.querySelector('.out');

//t5

function t5 (name) {
    return 'Hello ' + name;
}
btn.onclick = () => {
    out.innerHTML = t5 (input.value);
};

//t4
// function t4 (a) {
//     return 2021 - a;
// }

// btn.onclick = () => {
//     let value = input.value;
//     out.innerHTML = t4 (value);
// };



//t3
// function t3 (a, b) {
//     return a * b;
// }

// btn.onclick = () => {
//     let value = input.value;
//     out.innerHTML = t3 ( value, value);

// };

//2

// function t2 () {
//     let value = input.value;
//     return value;
// }

// btn.onclick = () => {
//     out.textContent = t2();
// };



//t1
// function f1 () {
//     let input = document.querySelector('.input').value;
//     out.innerHTML = input;
//     console.log(out);
// }