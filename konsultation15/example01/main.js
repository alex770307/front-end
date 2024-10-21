//Создайте функцию getCenturies, которая принимает массив лет 
//и возвращает массив столетий. 
//Рекомендуется использовать метод map. 

const years = [1900, 1899, 2001, 2000, 1455, 14];

const getCenturies = (arr) => {
    const newArr = arr.map(

        (num) => {
            return Math.ceil(num / 100);
        }

    )
    return newArr;
}

const centuries = getCenturies(years);
console.log(centuries);