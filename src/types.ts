import {v4 as uuidv4} from 'uuid';

export class Todo {
    id: String;
    completed: Boolean;
    active: Boolean;
    content: String;
    pomos: Number;
    totalPomos: Number;

    constructor(content: String, totalPomos: Number) {
        this.id = uuidv4();
        this.completed = false;
        this.active = false;
        this.content = content;
        this.pomos = 0;
        this.totalPomos = totalPomos;
    }
}