import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!sessionStorage.getItem('isLoggedIn') || sessionStorage.getItem('isLoggedIn') === 'false') {
      alert('로그인 되어 있지 않음!!');
      return false;
    } else {
      return true;
    }
  }

}
