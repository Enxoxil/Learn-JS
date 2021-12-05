let out = document.querySelector(".out");

let btn = (document.querySelector(".btn").onclick = () => {
  let strin = "";
  for (let i = 1; i <= 3; i++) {
    for (let k = 1; k <= 3; k++) {
      strin += "*";
    }
    strin += "_";
  }

  out.innerHTML = strin;
});
