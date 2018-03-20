import { CustomValidator } from './../../shared/custom.validator';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginIdControl: FormControl;
  nickNameControl: FormControl;
  today: number = Date.now();

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginIdControl = new FormControl('', CustomValidator.startsWithNumber());
    this.nickNameControl = new FormControl('', [
      Validators.required, Validators.pattern('[A-Z]+'), Validators.minLength(3), Validators.maxLength(7)
    ]);
    this.loginForm = new FormGroup({
      loginIdControl: this.loginIdControl,
      nickNameControl: this.nickNameControl
    });
  }

  onSubmit() {
    alert('submit : ' + this.loginForm.value.loginIdControl + ' : ' + this.loginForm.value.nickNameControl);
    if (this.loginForm.value.loginIdControl === 'GUEST') {
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['todo']);
    } else {
      this.loginForm.reset();
    }
  }

  logout() {
    alert('logout');
    sessionStorage.setItem('isLoggedIn', 'false');
    this.router.navigate(['login']);
  }

  checkLoggedIn() {
    if (!sessionStorage.getItem('isLoggedIn') || sessionStorage.getItem('isLoggedIn') === 'false') {
      return false;
    } else {
      return true;
    }
  }

}
