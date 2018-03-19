import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from './custom-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginId: string;
  nickName: string;

  loginForm = new FormGroup({
    loginIdFormControl: new FormControl('', CustomValidator.startsWithNumber()),
    nickNameFormControl: new FormControl('', Validators.compose(
      [Validators.required, Validators.pattern('[A-Z]+'), Validators.minLength(3), Validators.maxLength(7)]
    ))
  });

  today: number = Date.now();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    alert('onSubmit : ' + this.loginId);
    if (this.loginId === 'GUEST') {
      this.router.navigate(['todo']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
