// Задание 6 (необязательное).
// Разбить строку на слова и вывести в консоль по одному слову в строке.
// Не забыть удалить знаки пунктуации.

// Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.

const str = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.";
const firstWordsArray = str.split(" ");

const firstWord = firstWordsArray[0].substring(0, 4);
const secondWord = firstWordsArray[1];
const thirdWord = firstWordsArray[2];
const fourthWord = firstWordsArray[3];
const fifthWord = firstWordsArray[4].substring(0, 8);
const sixthWord = firstWordsArray[5];
const seventhWord = firstWordsArray[6].substring(0, 7)


// Задание 7 (необязательное).
// Перевернуть массив (аналог reverse).
const secondWordsArray = [];
secondWordsArray.push(firstWord, secondWord, thirdWord, fourthWord, fifthWord, sixthWord, seventhWord);

const reversedArray = [];
for (let i = secondWordsArray.length - 1; i >= 0; i--) {
    reversedArray.push(secondWordsArray[i]);
}

const numbersArray = [50, 40, 30, 20, 10];
const secondReversedArray = numbersArray.reverse();


console.log();
console.log("Исходная строка :                  " + str);

console.log();
console.log("Исходный мвссив :                  " + firstWordsArray);

console.log();
console.log("По одному слову в строке :         " + firstWord, secondWord, thirdWord, fourthWord, fifthWord, sixthWord, seventhWord);

console.log();
console.log("Новый массив :                     " + secondWordsArray);

console.log();
console.log("Развёрнутый массив через цикл :    " + reversedArray);

console.log();
console.log("Развёрнутый массив через реверс :  " + secondReversedArray);
