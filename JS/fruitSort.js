const arrFruit = [
  "cherries",
  "apple",
  "banana",
  "apple",
  "lemon",
  "banana",
  "strawberry",
  "banana",
  "apple",
  "strawberry",
  "lemon",
  "apple",
  "strawberry",
  "banana",
  "apple",
  "сосиска",
];

const arr = []; // итоговый массив с фруктами
sortFruits(arrFruit);

function counter() {
  let a = 0;
  return function () {
    return a++;
  };
}

function sortFruits(fruits) {
  const fruitNames = new Set(fruits); // получаем все названия фруктов
  const fruitObj = {}; // фрукт : количество

  for (let items of fruitNames) {
    let b = counter();

    fruits.forEach(function (item) {
      if (item == items) {
        b();
      }
    });
    fruitObj[items] = b();
  }

  let keySorted = Object.keys(fruitObj).sort(function (a, b) {
    // сортируем по количеству. Массив названий
    return fruitObj[b] - fruitObj[a];
  });

  for (let key of keySorted) {
    for (let i = 0; i < fruitObj[key]; i++) {
      arr.push(key);
    }
  }
  console.log(fruitObj); // итог фрукт : кол-во
}

console.log(arr); // итог
