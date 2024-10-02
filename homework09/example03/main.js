// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 75.
// Найти минимальное и максимальное значение в массиве.Вывести в консоль их сумму.
const array = [];

for (let i = 0; i < 10; i++) {

    array.push(Math.floor(Math.random() * 75) + 1);
}
console.log();
console.log("Array of 10 elements :  ", ...array);

//используем оператор распространения `...`
const maxNumber = Math.max(...array);
console.log();
console.log("Max number: " + maxNumber);

const minNumber = Math.min(...array);
console.log();
console.log("Min number: " + minNumber);

console.log();
const sum = maxNumber + minNumber;
console.log("Sum of min and max: " + sum);
