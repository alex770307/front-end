
const allButton = document.getElementById('all');
const completedButton = document.getElementById('completed');
const uncompletedButton = document.getElementById('uncompleted');
const createButton = document.querySelector('.btn');
const taskInput = document.querySelector('.task-input');
const taskList = document.querySelector('.list');

let tasks = [];

function renderTasks(filter) {
    taskList.innerHTML = '';
    let filteredTasks = tasks;

    if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.isCompleted);
    } else if (filter === 'uncompleted') {
        filteredTasks = tasks.filter(task => !task.isCompleted);
    }

    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('list-item');
        if (task.isCompleted) {
            li.classList.add('list-item_done');
            li.style.textDecoration = 'line-through';
        }
        li.textContent = task.text;

        li.addEventListener('click', () => {
            task.isCompleted = !task.isCompleted;
            renderTasks(filter);
        });

        taskList.appendChild(li);
    });
}

createButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, isCompleted: false });
        taskInput.value = '';
        renderTasks('all');
    }
});

allButton.addEventListener('click', () => renderTasks('all'));
completedButton.addEventListener('click', () => renderTasks('completed'));
uncompletedButton.addEventListener('click', () => renderTasks('uncompleted'));

renderTasks('all');