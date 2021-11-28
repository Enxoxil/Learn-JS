"use strict";

// function calc (a, b){
//     return (a + b);

// }
// console.log(calc(4, 4));
// console.log(calc(4, 8));
// console.log(calc(4, 7));

// const calc = (a, b) => a + b;
// const calc2 = (a, b) => { return a + b };
// const calc3 = (a, b) => {
//     //expressions
//     return a + b
// };

function last(lang, callback) {
  console.log(`I learn ${lang},`);
  callback();
}

function first() {
  console.log("HTML, CSS");
}

last("JS", first);

//object

const obj = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
    size: {
      big: "veryBig",
      little: "veryLittle",
      center: {
        align: "center",
        margin: "auto",
      },
    },
  },
};

for (let key in obj) {
  if (typeof obj[key] === "object") {
    for (let i in obj[key]) {
      if (typeof obj[key][i] === "object") {
        for (let y in obj[key][i]) {
          if (typeof obj[key][i][y] === "object") {
            for (let z in obj[key][i][y]) {
              console.log(`Свойство ${z} имеет значение ${obj[key][i][y][z]}`);
            }
          } else {
            console.log(`Свойство ${y} имеет значение ${obj[key][i][y]}`);
          }
        }
      } else {
        console.log(`Свойство ${i} имеет значение ${obj[key][i]}`);
      }
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${obj[key]}`);
  }
}

console.log(Object.keys(obj));
