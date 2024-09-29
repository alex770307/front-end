// Задание 6 (необязательное).
// Разбить строку на слова и вывести в консоль по одному слову в строке.
// Не забыть удалить знаки пунктуации.

// Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.

const str = "Итак, самое длинное научное название: метилпропенилендигидроксициннаменилакрилическая кислота.";
const cleanedString = str.replace(/[.,!?;:]/g, ''); 
const wordsArray = cleanedString.split(" ");

const firstWord = wordsArray[0];
const secondWord = wordsArray[1];
const thirdWord = wordsArray[2];
const fourthWord = wordsArray[3];
const fifthWord = wordsArray[4];
const sixthWord = wordsArray[5];
const seventhWord = wordsArray[6];


// Задание 7 (необязательное).
// Перевернуть массив (аналог reverse).

const reversedArray = [];
for (let i = wordsArray.length - 1; i > -1; i--) {
    reversedArray.push(wordsArray[i]);
}

const numbersArray = [50, 40, 30, 20, 10];
const secondReversedArray = numbersArray.reverse();


console.log();
console.log("Исходная строка :                  " + str);

console.log();
console.log("Исходный мвссив :                  " + wordsArray);

console.log();
console.log("По одному слову в строке :         " + firstWord, secondWord, thirdWord, fourthWord, fifthWord, sixthWord, seventhWord);

console.log();
console.log("Развёрнутый массив через цикл :    " + reversedArray);

console.log();
console.log("Развёрнутый массив через реверс :  " + secondReversedArray);
