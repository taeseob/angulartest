import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line
  selector: '[todoItem]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem;

  @Output()
  removeItem: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  updateItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  edit() {
    this.todoItem.editing = true;
  }

  stopEditing(inputValue) {
    this.todoItem.editing = false;
    const clonedTodo = JSON.parse(JSON.stringify(this.todoItem));
    clonedTodo.item = inputValue.value;
    if (inputValue.value.length !== 0) {
      this.update(clonedTodo);
    }

  }

  cancelEditing() {
    this.todoItem.editing = false;
  }

  complete() {
    this.todoItem.editing = false;
    const clonedTodo = JSON.parse(JSON.stringify(this.todoItem));
    clonedTodo.done = !clonedTodo.done;
    this.update(clonedTodo);
  }

  remove() {
    this.removeItem.emit(this.todoItem.id);
  }

  update(item) {
    this.updateItem.emit(item);
  }

}
