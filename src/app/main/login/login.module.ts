import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from './custom.pipe';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent, CustomPipe]
})
export class LoginModule { }
