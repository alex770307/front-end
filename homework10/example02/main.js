// Задание 2. Стрелочная ф-ция возводящая число в квадрат
// Создайте ф-цию, которая возвращает квадрат числа

// Функция должна принимать целое число
// Если число не целое - скруглить его в меньшую сторону
// Функция должна вернуть квадрат этого числа

function squareOfNumber(n = 1) {
    const result = n ** 2;
    return result;
}
const number = Math.round(3.9);
const result = squareOfNumber(number);

console.log("Квадрат числа " + number + " равен " + result);