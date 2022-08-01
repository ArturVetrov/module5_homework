/*Задание 8.

Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки. */

let fruits = new Map();
fruits.set("apple", "red");
fruits.set("strawberry", "red");
fruits.set("banana", "yellow");
fruits.set("cherry", "vinous");

fruits.forEach((value, key) => {
  console.log(`${key} - X, ${value} - Y`)
});
