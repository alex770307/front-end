// Напишите функцию sortRobotsByVersion, 
// которая принимает массив роботов типа robots 
// и сортирует его начиная от самой новой версии. 
// Функция возвращает осортированную копию массива robots. 

const robots = [
    { name: 'Kobs', ver: 16 },
    { name: 'Lari', ver: 32 },
    { name: 'Lee', ver: 1 },
    { name: 'Robert', ver: 1 },
    { name: 'Viber', ver: 4 },
    { name: 'Colins', ver: 21 }
];

const sortRobotsByVersion = (arr) => {

    const sortedArr = [...arr].sort(

        (a, b) => {
            return b.ver - a.ver;
        }
    )

    return sortedArr;
}


const sortedRobotsByVersion = sortRobotsByVersion(robots);
console.log(sortedRobotsByVersion);

