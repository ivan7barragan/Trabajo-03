const form = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

document.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);

form.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (!taskText) {
        alert('Por favor ingresa una tarea.');
        return;
    }

    const task = { text: taskText, completed: false };
    createTaskElement(task);
    saveTaskToLocalStorage(task);

    taskInput.value = '';
}

function createTaskElement(task) {
    const li = document.createElement('li');
    li.textContent = task.text;

    if (task.completed) {
        li.classList.add('completed');
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);

    li.addEventListener('click', () => toggleComplete(task.text));

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function deleteTask(event) {
    const taskElement = event.target.parentElement;
    removeTaskFromLocalStorage(taskElement.firstChild.textContent);
    taskElement.remove();
}

function toggleComplete(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.map(task =>
        task.text === taskText ? { ...task, completed: !task.completed } : task
    );

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    refreshTaskList();
}

function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTaskElement(task));
}

function refreshTaskList() {
    taskList.innerHTML = '';
    loadTasksFromLocalStorage();
}

