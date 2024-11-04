const allButton = document.querySelector("#all");
const completedButton = document.querySelector("#completed");
const uncompletedButton = document.querySelector("#uncompleted");
const createButton = document.querySelector(".btn");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".list");

let allTasks = [];

function addElement() {
    const taskText = taskInput.value;
    const obj = { key: taskText, value: false };
    allTasks.push(obj);
    renderTasks(); // обновить отображение списк задач
    taskInput.value = ''; // очистить поле ввода
};

//function          //которая отрисовывает данные
function renderTasks(filter = 'all') {
    taskList.innerHTML = ''; // очистить список перед отрисовкой

    const filteredTasks = allTasks.filter(task => {
        if (filter === 'completed') return task.value;
        if (filter === 'uncompleted') return !task.value;
        return true;

    });

    filteredTasks.forEach((task, index) => {
        const newListItemElement = document.createElement('li');
        newListItemElement.textContent = task.key;
        newListItemElement.classList.add("list-item");
        if (task.value) newListItemElement.classList.add("list-item_done");

        newListItemElement.addEventListener('click', () => toggleTask(index));
        taskList.append(newListItemElement);
    });
};

// переключатель задач
function toggleTask(index) {
    allTasks[index].value = !allTasks[index].value;
    renderTasks();
};

createButton.addEventListener("click", addElement)
allButton.addEventListener("click", () => renderTasks('all'));
completedButton.addEventListener("click", () => renderTasks('completed'));
uncompletedButton.addEventListener("click", () => renderTasks('uncompleted'));