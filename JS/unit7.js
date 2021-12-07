let btn = document.querySelector('.btn').onclick = f1;

let out = document.querySelector('.out');


function f1 () {
    let input = document.querySelector('.input').value;
    out.innerHTML = input;
    console.log(out);
}