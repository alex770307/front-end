// Преобразуйте следующие значения к строке или числу или логическому значению и выведите в консоль результат, пример:

console.log('-17.17 to string is ' + String(-17.17));

// Изучите результаты.

/* to string */
console.log('17 to string is ' + String(17));
console.log('-17.17 to string is ');
console.log('false to string is ');
console.log('null to string is ');
console.log('undefined to string is ');
console.log('0 to string is ');

/* to number */
console.log("'17' to number is " + Number('17'));
console.log('true to number is ');
console.log('false to number is ');
console.log('null to number is ');
console.log('undefined to number is ');
console.log("'   20   ' to number is ");
console.log("'      ' to number is ");

/* to boolean */
console.log('null to boolean is ');
console.log('undefined to boolean is ');
console.log('0 to boolean is ');
console.log('-0 to boolean is ');
console.log('NaN to boolean is ');
console.log("'' to boolean is ");
console.log("' ' to boolean is ");
console.log('17 to boolean is ');
console.log("'Hello' to boolean is ");
console.log();

/* to string */
const a = 17; const a2 = -17.17; const a3 = false; const a4 = null;
const a5 = undefined; const a6 = 0;

/* to number */
const b = "17"; const b2 = true; const b3 = false; const b4 = null; const b5 = undefined;
const b6 = "    20    "; const b7 = "      "; const b8 = "   30d   ";

/* to boolean */
const c = null; const c2 = undefined; const c3 = 0; const c4 = -0; const c5 = NaN;
const c6 = ""; const c7 = " "; const c8 = 17; const c9 = "Hello";

console.log("----------------");
console.log("Numbers to strings are :\n" + "a = " + String(a) + "\n" + "a2 = " + String(a2) + "\n"
    + "a3 = " + String(a3) + "\n" + "a4 = " + String(a4) + "\n"
    + "a5 = " + String(a5) + "\n" + "a6 = " + String(a6) + "\n");

console.log("----------------");
console.log("Strings to numbers are :\n" + "b = " + Number(b) + "\n" + "b2 = " + Number(b2) + "\n" + "b3 = "
    + Number(b3) + "\n" + "b4 = " + Number(b4) + "\n" + "b5 = " + Number(b5) + "\n" + "b6 = "
    + Number(b6) + "\n" + "b7 = " + Number(b7) + "\n" + "b8 = " + Number(b8) + "\n");

console.log("----------------");
console.log("Values to boolean are :\n" + "c = " + Boolean(c) + "\n" + "c2 = "
    + Boolean(c2) + "\n" + "c3 = " + Boolean(c3) + "\n" + "c4 = "
    + Boolean(c4) + "\n" + "c5 = " + Boolean(c5) + "\n" + "c6 = "
    + Boolean(c6) + "\n" + "c7 = " + Boolean(c7) + "\n" + "c8 = "
    + Boolean(c8) + "\n" + "c9 = " + Boolean(c9) + "\n");

