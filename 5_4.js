/*Задание 3.

Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH". */

let string = "Hello";
let reverse = string.split("").reverse("").join("");

console.log(reverse);

/*Задание 4.

Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math. */

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }
  
  console.log(getRandomInt(101))