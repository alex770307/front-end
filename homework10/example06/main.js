// Задание 6. (необязательное)
// Напишите функцию reverseWords(str), принимающую на вход строку. 
// Функция должна вернуть новую строку, расставив слова в обратном порядке.
// Если в строке есть знаки препинания, их можно удалить или оставить — на ваше усмотрение.

const startString = "Компьютерные программы создают программисты или по-другому — разработчики. " +
    "Большую часть времени программисты жестоко пишут код. " +
    "Код — это упорядоченная последовательность команд, " +
    "которые запускают выполнение определенных задач на компьютере или любой другой технике."

console.log(startString);
console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");

function reverseWords(str) {

    const wordsArray = str.split(" ");
    return wordsArray.reverse().join(" ");
}

const secondString = "технике. другой любой или компьютере на задач определенных выполнение запускают которые команд," +
    " последовательность упорядоченная это — Код код. пишут жестоко программисты времени часть Большую " +
    "разработчики. — по-другому или программисты создают программы Компьютерные";
const reversedString = reverseWords(secondString);

console.log(reversedString);