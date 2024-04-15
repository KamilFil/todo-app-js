const btnAddTask = document.getElementById('btnAddTask');
const taskInput = document.getElementById('taskInput');

let tasks = [];
function taskInputValue(e) {
    console.log(e.target.value);
}

const getCookie = (cname) => {
    let name = cname + "=";
    let ca = document.cookie.split(';');

    return ca;
}

console.log('cookie',getCookie('tasks'))

const handleAddTask = (e) => {
    document.cookie = "tasks=" + JSON.stringify(tasks);
    document.cookie = "user=John";
    tasks.push(taskInput.value);
    console.log(document.cookie);
    e.preventDefault();
}



btnAddTask.addEventListener('click', handleAddTask);
taskInput.addEventListener('change', taskInputValue);

