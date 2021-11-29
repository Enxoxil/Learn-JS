const btn = document.querySelector(".btn");


btn.onclick = function () {
    let input = +document.querySelector(".age").value;
    let out = document.querySelector('.out');
    if (input == 4) {
        out.innerHTML = true;
    } else {
        out.innerHTML = false;
    }
}