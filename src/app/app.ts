import Todo from './todo';

export class App {
    heading: string;
    todos: Array<Todo>;
    todoDescription: string;

    constructor() {
        this.heading = 'Todos';
        this.todos = [];
        this.todoDescription = '';
    }

    addTodo() {
        if (this.todoDescription) {
            this.todos.push(new Todo(this.todoDescription));
            this.todoDescription = '';
        }
    }

    removeTodo(todo: Todo) {
        let idx = this.todos.indexOf(todo);
        if (idx >= 0)
            this.todos.splice(idx, 1);
    }
}