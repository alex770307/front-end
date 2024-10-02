// Задание 3. Сумма четных чисел в заданном промежутке
// Создайте ф-цию, которая ищет сумму всех четных чисел в заданном промежутке

// Аргументы функции два - начало промежутка и конец промежутка
// Если число не целое - скруглить его в меньшую сторону
// На заданном промежутке ф-ция должна найти и сложить все четные числа и вернуть сумму

const sumOfEvenNumbers = (a = 1, b = 1000) => {
    const start = Math.floor(a);
    const end = Math.floor(b);
    let result = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }
    return result;
}
const first = 0.6;
const second = 20.9999999;
const result = sumOfEvenNumbers(first, second);

console.log("Сумма четных чисел в промежутке от " + first + " до " + second + " равна " + result);