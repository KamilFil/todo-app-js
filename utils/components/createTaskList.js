import {createTaskItem} from "./createTaskItem.js";

export const createTaskList = (taskListElement, task) => {
    const taskTodoList = document.querySelector('.task-list.todo');
    const taskProgressList = document.querySelector('.task-list.in-progress');
    const taskDoneList = document.querySelector('.task-list.done');

    const taskTodo = task.filter(task => task.table === 'todo');
    const taskInProgress = task.filter(task => task.table === 'inprogress');
    const taskDone = task.filter(task => task.table === 'done');

    if(!task || task.length === 0) {
        taskListElement.forEach(list => {
            const newItem = document.createElement('p');
            newItem.classList.add('empty-task')
            newItem.innerText = 'Brak zadań';
            list.appendChild(newItem);
        })
    }

    if (taskListElement) {
        if(taskTodo) {
            taskTodo.forEach(item => {
                taskTodoList.appendChild(createTaskItem(item));
            });
        }
        if(taskInProgress) {
            taskInProgress.forEach(item => {
                taskProgressList.appendChild(createTaskItem(item));
            });
        }
        if(taskDone) {
            taskDone.forEach(item => {
                taskDoneList.appendChild(createTaskItem(item));
            });
        }
    } else {
        console.error('Task list element not found');
    }
}