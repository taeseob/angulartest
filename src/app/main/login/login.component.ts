import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from '../../shared/custom-validator';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logined = false;

  public loginForm: FormGroup;

  today: number = Date.now();

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      loginId: new FormControl('', CustomValidator.startsWithNumber()),
      nickName: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  get loginId() {
    return this.loginForm.get('loginId');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.loginForm.value.loginId === 'GUEST') {
        this.loginForm.reset();
        this.loginService.login()
          .subscribe(
            (val) => {
              this.logined = val;
            });
      } else {
        alert('틀림');
      }
    } else {
      this.validate(this.loginForm);
    }
  }


  logout(): void {
    this.loginService.logout()
      .subscribe(
        (val) => {
          this.logined = val;
        });
  }

  validate(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched();
        control.markAsDirty();
      } else if (control instanceof FormGroup) {
        this.validate(control);
      }
    });

  }
}
