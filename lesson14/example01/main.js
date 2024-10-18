const arrExample = [3, 1, 9, 27, 11];

const arrExampleSorted = arrExample.sort(
    (a, b) => {
        return a - b;
        //  или так: 
        // if (a < b) {
        //     return -1;
        // } else if (a > b) {
        //     return +1
        // } else {
        //     return 0;
        // }
    }
);

// предварительное копирование

//[...arrExapmle]
//someFunction(...arrExapmle)

// const copyOfarrExapmle = [...arrExapmle];
// const arrExampleSortedAlt = copyOfarrExapmle.sort((a, b) => a - b);
const arrExampleSortedAlt = [...arrExample].sort((a, b) => a - b);

console.log(arrExampleSorted);

const peopleExtended = [
    { name: 'Alice', age: 23, isActive: true },
    { name: 'Bob', age: 45, isActive: false },
    { name: 'Charlie', age: 30, isActive: true },
    { name: 'David', age: 54, isActive: false },
    { name: 'Eva', age: 29, isActive: true },
    { name: 'Frank', age: 37, isActive: false },
    { name: 'Grace', age: 40, isActive: true },
    { name: 'Hannah', age: 22, isActive: false },
    { name: 'Ian', age: 34, isActive: true },
    { name: 'Julia', age: 31, isActive: false },
    { name: 'Kevin', age: 26, isActive: true },
    { name: 'Laura', age: 44, isActive: false },
    { name: 'Michael', age: 52, isActive: true },
    { name: 'Nina', age: 27, isActive: false },
    { name: 'Oscar', age: 35, isActive: true }
];

console.log([...peopleExtended].sort((a, b) => b.isActive - a.isActive));

const firstFifthPeople = peopleExtended.slice(0, 5);
console.log(firstFifthPeople);
