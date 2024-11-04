const allButton = document.querySelector("#all");
const completedButton = document.querySelector("#completed");
const uncompletedButton = document.querySelector("#uncompleted");
const taskList = document.querySelector(".list");

let allTasks = [];

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        doSomethingWidhData(data)
    });

function doSomethingWidhData(todos) {
    allTasks = todos.slice(0, 15).map(element => (
        { title: element.title, completed: element.completed }));
    renderTasks();
}

function renderTasks(filter = 'all') {
    taskList.innerHTML = '';
    const filteredTasks = allTasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'uncompleted') return !task.completed;
        return true;
    });

    filteredTasks.forEach((task, index) => {
        const newListItemElement = document.createElement('li');
        newListItemElement.textContent = task.title;
        newListItemElement.classList.add("list-item");
        if (task.completed) newListItemElement.classList.add("list-item_done");

        newListItemElement.addEventListener('click', () => toggleTask(index));
        taskList.append(newListItemElement);
    });
};

function toggleTask(index) {
    allTasks[index].completed = !allTasks[index].completed;
    renderTasks();
};

allButton.addEventListener("click", () => renderTasks('all'));
completedButton.addEventListener("click", () => renderTasks('completed'));
uncompletedButton.addEventListener("click", () => renderTasks('uncompleted'));