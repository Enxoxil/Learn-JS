let btn = document.querySelector(".btn");
let out = document.querySelector(".out");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let str = "";

//t1

btn.onclick = () => {
  out.innerHTML = "out";
  out.style.width = "200px";
  out.style.height = "40px";
  out.style.border = "1px solid red";
  out.style.backgroundColor = "cyan";
  out.style.textAlign = "center";
  out.classList.add("addedClass");
  
};
