// Задание 7. (необязательное)
// Напишите функцию intersection(arr1, arr2). 
// Она должна принимать на вход два массива целых чисел. 
// Функция должна вернуть новый массив чисел, содержащихся в обоих исходных массивах.

// Протестируйте решение, вызывая функцию с разными аргументами:

// console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // должна вернуть [4, 1] 
// console.log(intersection([1, 5, 4, 2], [7, 12])); // должна вернуть [] 
// console.log(intersection([1, 1, 0, 0, 0, 1, 5, 4, 2], [7, 12, 1, 1, 1, 1, 1, 0, 0, 0, 0])); // должна вернуть []

function intersection(arr1, arr2) {

    const array = [];

    if (arr1.length > arr2.length) {

        for (let i = 0; i < arr1.length; i++) {

            if (arr1[i] === arr2[i]) {
                array.push(arr1[i]);
            }
        }

    } else {

        for (let i = 0; i < arr2.length; i++) {

            if (arr1[i] === arr2[i]) {
                array.push(arr1[i]);
            }
        }
    }

    return array;
}

console.log(intersection([10, 8, 45, 64, 2, 5, 7, 20], [1, 8, 0, 64, 7, 5, 6, 20, 56, 100]));
console.log("----------------------------------------");
console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // должна вернуть [4, 1] 
console.log("----------------------------------------");
console.log(intersection([1, 5, 4, 2], [7, 12])); // должна вернуть [] 
console.log("----------------------------------------");
console.log(intersection([1, 1, 0, 0, 0, 1, 5, 4, 2], [7, 12, 1, 1, 1, 1, 1, 0, 0, 0, 0])); // должна вернуть []