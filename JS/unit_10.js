// Task 1
// Функция принимает число n. Напишите рекурсивную функцию r1, которая выводит числа от n до нуля в out-1. Разделитель - пробел.

function t1(n) {
  let out = "";
  let i = n;
  r1(i);
  function r1(z) {
    out += z + " ";
    z--;
    if (z < 0) return;
    r1(z);
  }
  console.log(out);
}

document.querySelector(".b-1").addEventListener("click", () => {
  t1(7);
});

// Task 2
// Функция принимает число. Напишите рекурсивную функцию r2, которая выводит числа от 0 до введенного числа в out-2 с шагом 2.
// Разделитель - пробел.

function t2(n) {
  let out = "";
  let i = 0;
  r2();
  function r2() {
    out += i + " ";
    i = i + 2;
    if (i >= n) return;
    r2();
  }
  console.log(out);
}

document.querySelector(".b-2").addEventListener("click", () => {
  t2(5);
});

// Task 3.
// Функция t3 принимает аргумент 'odd' или 'even' и должна возвратить четное или не четное число в диапазоне от 0 до 100.
// Решите задачу рекурсивно. Для генерации случайных чисел используйте функцию randomInteger.

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function t3(arg) {
  r1();

  function r1() {
    let num = randomInteger(0, 100);
    if (num % 2 == 0 && arg == "even") {
      return console.log(num);
    }
    if (num % 2 != 0 && arg == "odd") {
      return console.log(num);
    }
    r1();
  }
}

document.querySelector(".b-3").addEventListener("click", () => {
  document.querySelector(".out-3").textContent = t3("odd");
});

// Task 4.
// Функция t4 с помощью randomInteger генерирует случайное число от 0 до 10 и проверяет его наличие в массиве ar4.
// Если число уже есть - выполняет генерацию заново. Если нет - возвращает это число.

let ar4 = [1, 2, 3, 4, 6, 7, 8, 9];
function r4() {
  let nums = randomInteger(0, 10);
  for (let item of ar4) {
    if (nums == item) {
      return r4();
    }
  }
  console.log(nums);
  return nums;
}

document.querySelector(".b-4").addEventListener("click", () => {
  document.querySelector(".out-4").textContent = r4();
});

// Task 5.
// Напишите рекурсивную функцию t5, которая генерирует целое число от 0 до 10 ( с помощью randomInteger) и добавляем его в массив
// ar5. Проверяет, если сумма элементов массива больше 30 - то прекращает свою работу, если меньше - запускается заново.
// Возвращает массив ar5 по результату работы.

function d3() {
  let ar5 = [];
  let str = 0;
  t5();

  function t5() {
    let nums = randomInteger(0, 10);
    ar5.push(nums);
    str = str + nums;
    console.log(str, ar5);

    if (str >= 30) return;
    t5();
  }
}

document.querySelector(".b-5").addEventListener("click", () => {
  document.querySelector(".out-5").textContent = d3();
});

// Task 6.
// Напишите рекурсивную функцию t6, которая вытаскивает из массива ar6 числа в массив ar6_res.

let ar6 = [
  5,
  [3, 4, "h"],
  [
    [5, 6, "b"],
    ["c", 7, [8]],
  ],
  9,
  [[[[[10, "i", 11, [12]]]]]],
];

let ar6res = [];
function searchOfArray(arr) {
  for (let item of arr) {
    t6(item);
  }
  function t6(item) {
    if (typeof item == "string") {
      return ar6res.push(item);
    } else if (typeof item == "object") {
      for (let item2 of item) {
        t6(item2);
      }
    }
  }
  console.log(ar6res);
}

document.querySelector(".b-6").addEventListener("click", () => {
  searchOfArray(ar7);
  document.querySelector(".out-6").textContent = ar6res;
});

// Task 7.
// Напишите рекурсивную функцию t7, которая вытаскивает из массива ar7 все строки в ar7_res.

let ar7 = ["hi", ["hii"], [["hiii"]], [[["hiiii"]]], ["i", [[[[[["hi"]]]]]]]];
let ar7_res = [];

function t7(arg) {}

document.querySelector(".b-7").addEventListener("click", () => {
  t7(ar7);
  document.querySelector(".out-7").textContent = ar7_res;
});

// Task 8.
// Напишите рекурсивную функцию t8, которая получает с помощью randomInt целое число от 1000 до 9000 и проверяет если сумма
// первых двух цифр числа равна сумме 3 и 4 числа то возвращает это число.
// Если нет - повторяет операцию. Например число 1235 не удовлетворяет этому условию, потому что 1+2 не равно 3+5.
// А вот число 7180  - удовлетворяет.

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function t8() {
  let arr = randomInteger(1000, 9000).toString().split("");
  return calculate(...arr);
  function calculate(...array) {
    if (+array[0] + +array[1] !== +array[2] + +array[3]) {
      return t8();
    } else {
      return array.join("");
    }
  }
}

document.querySelector(".b-8").addEventListener("click", () => {
  document.querySelector(".out-8").textContent = t8();
});
// Task 9.
// Напишите рекурсивную функцию t9, которая создает массив ar9_res состоящий из возраста (age) пользователей прописанных в ar9.

let ar9 = {
  ivanov: {
    age: 25,
    parent: {
      "ivanov-a": {
        age: 45,
      },
      "ivanov-b": {
        age: 43,
        parent: {
          "sergeev-a": {
            age: 88,
            parent: {
              lionenko: {},
            },
          },
        },
      },
    },
  },
  kostenko: {
    age: 56,
    parent: {
      ignatenko: {},
      sniezko: {
        age: 45,
      },
    },
  },
};

let ar9Res = [];
function t9(obj) {
  for (let key in obj) {
    getAge(obj[key]);
  }

  function getAge(param){
    if (param.age !== undefined){
      console.log(param.age);
      ar9Res.push(param.age);
    }
    if (param.parent !== undefined){
      console.log(param.parent);
      t9(param.parent);
    }
  }
}

document.querySelector(".b-9").addEventListener("click", () => {
  t9(ar9);
  document.querySelector(".out-9").innerHTML = ar9Res;
});

// Task 10.
// Напишите рекурсивную функцию t10, которая создает массив ar10_res фамилии людей у которых нет информации о возрасте.

let ar10 = {
  ivanov: {
    age: 25,
    parent: {
      "ivanov-a": {
        age: 45,
        parent: {},
      },
      "ivanov-b": {
        age: 43,
        parent: {
          "sergeev-a": {
            age: 88,
            parent: {
              lionenko: {},
            },
          },
        },
      },
    },
  },
  kostenko: {
    age: 56,
    parent: {
      ignatenko: {
        parent: {
          sidorenko: {},
        },
      },
      sniezko: {
        age: 45,
      },
    },
  },
};

let ar10res = [];

function t10 (obj) {
  for (let key in obj){
    console.log(ar10res);
    if (obj[key].age == undefined){
      ar10res.push(key);
    }
    if (obj[key].parent !== undefined){
      console.log(obj[key].parent);
      return t10 (obj[key].parent);
    }
  }
}

document.querySelector(".b-10").addEventListener("click", () => {
  t10(ar10);
  document.querySelector(".out-10").innerHTML = ar10res;
});
