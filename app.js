import { TodoManager } from './utils/todoManager.js';
import { dragManager} from "./utils/dragMenager.js";
import {createTaskList} from "./utils/components/createTaskList.js";

const todo = new TodoManager();
const task = todo.getTasks()

const taskListElement = document.querySelectorAll('.task-list');
const modalTask = document.querySelector('.modal-task');
const closetModalTask = document.querySelectorAll('.modal-task-close');
const addTaskButton = document.querySelector('.task-add-btn');
const taskForm = document.querySelector('.modal-task-form');


createTaskList(taskListElement, task);

closetModalTask.forEach(btn => {
    btn.addEventListener('click', () => {
        modalTask.classList.remove('active');
    })
})

addTaskButton.addEventListener('click', () => {
    modalTask.classList.add('active');
})

const taskRemoveButton = document.querySelectorAll('.remove-task');
taskRemoveButton.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const taskId = e.target.dataset.id;
        todo.removeTask(taskId);
        location.reload();
    })
})


const addTask = (e) => {
    const taskName = e.target.elements['task-name'].value;
    const taskDescription = e.target.elements['task-desc'].value;
    const taskId = task.length;
    todo.addTask({id: taskId, name: taskName, description: taskDescription, table: 'todo'});
    location.reload();
}

const taskItemElement = document.querySelectorAll('.task-item');

taskForm.addEventListener('submit', addTask);
dragManager(taskListElement, taskItemElement);
