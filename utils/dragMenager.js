import { TodoManager } from './todoManager.js';
const todo = new TodoManager();

export const dragManager = (listElement, itemElement) => {


    itemElement.forEach((item) => {
            item.addEventListener('dragstart', handleDragStart);
            item.addEventListener('dragend', handleDragEnd);
            item.addEventListener('dragover', handleDragOver);

            listElement.forEach(list => {

                list.addEventListener
                list.addEventListener('dragover', function(e) {
                    e.preventDefault();
                });

                list.addEventListener('drop', (e) => {
                    const afterElement = getDragAfterElement(list, e.clientY);
                    const item = document.querySelector('.dragging');
                    const itemId = item.id;
                    const newCat =  e.target.closest('.task-list').dataset.cat
                    todo.updateCat('tasks', itemId, newCat);
                    if (afterElement === null) {
                        list.appendChild(item);
                    } else {
                        list.insertBefore(item, afterElement);
                    }

                })
            })
        }
    )}


function handleDragStart(e) {
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.preventDefault();
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
}


function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.task-item:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}
