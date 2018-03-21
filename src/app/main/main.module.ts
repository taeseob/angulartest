import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoModule } from './todo/todo.module';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    CommonModule,
    TodoModule,
    LoginModule
  ],
  exports: [TodoModule],
  declarations: []
})
export class MainModule { }
