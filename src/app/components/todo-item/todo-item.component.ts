import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent {
    @Input() todo: string;
    @Output() deleteT = new EventEmitter();
    @Output() changeT = new EventEmitter();
    
    onDelete() {
        console.log("delete");
        this.deleteT.emit(this.todo);
    }
    onChange() {
        console.log("change");
        this.changeT.emit(this.todo);
    }
}  