import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TodoComponent],
  declarations: [TodoComponent, TodoItemComponent]
})
export class TodoModule {
}
