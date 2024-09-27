const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < arr.length; i++) {
    // console.log("Это проход цикла номер " + i);
    console.log(arr[i]);
}
 let allElementsOfArr = "";
 for (let i = 0; i < arr.length; i++) {
     allElementsOfArr = allElementsOfArr + " " + arr[i];
 }
 console.log(allElementsOfArr);
console.log("------------------");
 
 const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

 let allElementsOfArray = "";
 let j =0;// делаем счетчик
 while(j<array.length){
     allElementsOfArray = allElementsOfArray + "  " + array[j];
     j++;
 }
 console.log(allElementsOfArray);
 console.log("------------------------");

 const arrC = [];
// Заполнить массив числами от 5 до 9, должно получиться [5, 6, 7, 8, 9]
// использовать .push()
// использовать цикл

//  for (let i = 5; i < 10; i++) {
//      arrC.push(i);
//  }
//  console.log(arrC)
console.log("------------------------");
 let x = 5;
 while(x < 10) {
     arrC.push(x);
     x++;
 }
 console.log(arrC);