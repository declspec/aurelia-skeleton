export default class Todo {
    description: string;
    done: boolean;

    constructor(description: string) {
        this.description = description;
        this.done = false;
    }
}