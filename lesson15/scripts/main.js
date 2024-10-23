
const buttonAll = document.querySelector("#all");
const buttonCompleted = document.querySelector("#completed");
const buttonUncompleted = document.querySelector("#uncompleted");
const buttonCreate = document.querySelector(".btn");
const taskInput = document.querySelector(".task-input");
const list = document.querySelector(".list");

const buttonStatus = document.querySelectorAll(".status");

let arrElements = [];

function addElement() {
    const obj = {};
    obj.key = taskInput.value;
    obj.value = true;
    const newListItemElement = document.createElement('li');
    newListItemElement.textContent = obj.key;
    newListItemElement.classList.add("list-item");
    list.append(newListItemElement);
    arrElements.push(obj);
};
const array1 = arrElements.forEach(addElement);
//function                   //которая отрисовывает данные

buttonCreate.addEventListener("click", addElement);
buttonStatus.addEventListener("click", chooseStatus);

function chooseStatus(buttonAll) {
    const filteredTasks = array1.filter(
        (task) => {
            if (buttonAll === buttonCompleted) return task.buttonCompleted;
            if (buttonAll === buttonUncompleted) return task.buttonUncompleted;
            return true;
        }
    )
   
};


buttonAll.addEventListener("click",  chooseStatus('all'));
buttonCompleted.addEventListener("click",  chooseStatus('completed'));
buttonUncompleted.addEventListener("click",  chooseStatus('uncompleted'));