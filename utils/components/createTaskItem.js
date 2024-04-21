
export const createTaskItem = (task) => {
    const newItem = document.createElement('li');
    newItem.setAttribute('id', task.id);
    newItem.setAttribute('draggable', 'true');
    newItem.classList.add('task-item');

    const taskTitle = document.createElement('h3');
    taskTitle.classList.add('task-title');
    taskTitle.innerText = task.name;
    newItem.appendChild(taskTitle);

    const taskDescription = document.createElement('p');
    taskDescription.classList.add('task-description');
    taskDescription.innerText = task.description;
    newItem.appendChild(taskDescription);

    const taskButtons = document.createElement('div');
    newItem.appendChild(taskButtons);

    const taskButtonsIcon = document.createElement('i');
    taskButtonsIcon.classList.add('fa-solid');
    taskButtonsIcon.classList.add('fa-xmark');

    const taskButtonsRemove = document.createElement('a');
    taskButtonsRemove.classList.add('remove-task');
    taskButtonsRemove.setAttribute('data-id', task.id);
    taskButtonsRemove.appendChild(taskButtonsIcon);
    taskButtons.appendChild(taskButtonsRemove);

    return newItem
}