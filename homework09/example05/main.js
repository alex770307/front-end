// Объявить массив из 5 элементов и заполнить его любыми числами.
// Присвоить 5 переменным значения из массива с помощью деструктуризации.
const array = [];

for (let i = 0; i < 5; i++) {

    array.push(Math.round(Math.random() * 50));
}
console.log();
console.log("Array of 5 elements :  ", ...array);

// Деструктурируем массив на пять переменных
const [a, b, c, d, e] = array;

// Выводим значения переменных
console.log();
console.log("Values from array: ", a, b, c, d, e);