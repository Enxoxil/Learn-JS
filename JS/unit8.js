let btn = document.querySelector('.btn');
let out = document.querySelector('.out');
let input = document.querySelector('.input');
let input1 = document.querySelector('.input1');
let str = '';
//t1 

btn.onclick = () => {
    let i = 0;
    while (i <= 50) {
        str += i + ' ';
        i++;
    }
    out.innerHTML = str;
}
