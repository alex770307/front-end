const allButton = document.querySelector("#all");
const completedButton = document.querySelector("#completed");
const uncompletedButton = document.querySelector("#uncompleted");
const createButton = document.querySelector(".btn");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".list");

let allTasks = [];


const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
   
    const body = await response.json();
    writeElement(body);
    
  };
  getTodos();

function writeElement(todos) {
    const transformedTasks = todos.slice(0, 15).map(
        (task) =>{
            return{
                key: task.title,
                value: task.completed
            }
        }
    );
    allTasks = [...allTasks, ...transformedTasks];
    renderTasks();
}

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