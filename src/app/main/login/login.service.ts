import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class LoginService {

  login(): Observable<any> {
    alert('로그인!');
      sessionStorage.setItem('isLoggedIn', 'true');
      return Observable.of(true);
  }

  logout(): Observable<any> {
    sessionStorage.setItem('isLoggedIn', 'false');
    return Observable.of(false);
  }
}
