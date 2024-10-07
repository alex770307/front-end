// Функцию, которая принимает массив как первый аргумент, и функцию как второй аргумент.
// возвращает нам новый массив, где каждый элемент, это результат работы функции колбека (которая второй аргумент).
function squareNumber(a = 1) {
    const result = a * a;
    return result
}



function callback(arr, func) {
    const array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(func(arr[i]));
    }
    return array;
}
console.log(callback([11, 45, 21, 4, 6], squareNumber)); 

const functionMap = (arr, func) => {

    const  newArr = [];
 
   for (let i = 0; i < arr.length; i++) {
    
     newArr.push(func(arr[i]));
   
   }
   return newArr;
 
 
 }
 console.log(functionMap([2,3,4,5,6,7], squareNumber));