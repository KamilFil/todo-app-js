import {CookieManager} from "./cookieManager.js";

export class TodoManager {
    constructor() {
        this.cookieManager = new CookieManager();
        this.todos = this.loadTasks();
    }

    loadTasks() {
        const todoList =  this.cookieManager.getCookie('tasks');
        try {
            return todoList ? JSON.parse(todoList) : []
        } catch (e) {
            return [];
        }
    }

    updateCat(name, id, newCat) {
        const tasks = this.todos
        const task = tasks.find(task => task.id === Number(id));
        if(!newCat) return null
        task.table = String(newCat);
        this.saveTask()
        return 'Task updated';
    }

    addTask(task) {
        this.todos.push(task);
        this.saveTask();
        return 'Task added';
    }

    saveTask() {
        this.cookieManager.setCookie('tasks', JSON.stringify(this.todos))
        return 'Task saved';
    }

    getTasks() {
       return this.todos;
    }

    removeTask(id) {
        console.log(id)
        this.todos = this.todos.filter(task => task.id !== Number(id))
        this.saveTask();
        return 'Task removed';
    }
}