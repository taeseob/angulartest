import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoModule } from './todo/todo.module';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    CommonModule,
    TodoModule,
    LoginModule
  ]
})
export class MainModule { }
