// Объявить массив из 10 элементов и заполнить его случайными числами от 1 до 100.
// Найти максимальное и минимальное значение в массиве.
// (НЕ используем Math.min / max) Вывести в консоль.

const array = [];

for (let i = 0; i < 10; i++) {

    array.push(Math.floor(Math.random() * 100) + 1);
}
console.log();
console.log("Array of 10 elements :  ", array);


let maxValue = 1;
let minValue = 100;

for (let i = 0; i < array.length; i++) {

    if (array[i] > maxValue) {
        maxValue = array[i];
    }

    if (array[i] < minValue) {
        minValue = array[i];
    }
}
console.log();
console.log("Max is :  " + maxValue + "\n\n" + "Min is :  " + minValue);
