// Обяъвить массив из 10 любых элементов, заполнить.
// Вырезать первый элемент и добавить его в конец массива.
const array = [];

for (let i = 0; i < 10; i++) {

    array.push(Math.round(Math.random() * 50));
}
console.log();
console.log("Array of 10 elements :           ", ...array);

const arrayFirst = array.shift();
array.push(arrayFirst);
console.log();
console.log("Modified array of 10 elements :  ", ...array);
