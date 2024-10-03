// Задание 1. Even/Odd
// Создайте ф-цию, которая определяет парность числа

// Функция должна принимать целое число
// Если число не целое - скруглить его в меньшую сторону
// Функция должна вернуть строку 'even' если число четное
// Функция должна вернуть строку 'odd' если число не четное

function evenOrOddNumber(n = 0) {
    const number = Math.floor(n);
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
const number = 11.59999;
console.log("Number " + number + " is " + evenOrOddNumber(number));