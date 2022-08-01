/*Задание 3.

Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH". */

let string = "Hello";
let reverse = string.split("").reverse("").join("");

console.log(reverse);