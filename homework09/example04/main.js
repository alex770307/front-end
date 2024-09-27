// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 50.
// Найти сумму всех элементов массива.Вывести в консоль.
const array = [];

for (let i = 0; i < 10; i++) {

    array.push(Math.floor(Math.random() * 50) + 1);
}
console.log();
console.log("Array of 10 elements :  ", array);

let sum = 0;

for (let i = 0; i < 10; i++) {

    sum += array[i];
}
console.log();
console.log("Sum of array elements: " + sum);