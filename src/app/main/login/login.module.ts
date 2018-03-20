import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './login.service';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule {
}
