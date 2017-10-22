import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private cookies: CookieService) { }

  canActivate() {
    if (this._isLogin())
    return true;
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  _isLogin(): Boolean {
    if (this.cookies.get('auth_token'))
    return true;
    else
    return false;
  }



}
