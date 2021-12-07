let btn = document.querySelector('.btn');
let input = document.querySelector('.input');
let out = document.querySelector('.out');


//t3
function t3 (a, b) {
    return a * b;
}

btn.onclick = () => {
    let value = input.value;
    out.innerHTML = t3 ( value, value);

};

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