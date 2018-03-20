import {Injectable} from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    const loggin = sessionStorage.getItem('isLoggedIn');
    if (loggin === 'true') {
      return true;
    }

    alert('로그인이 안되었습니다!');
    this.router.navigate(['/login']);
    return false;
  }
}
