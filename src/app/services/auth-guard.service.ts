import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private auth: AuthService,
               private _router: Router ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // console.log(next);
    // console.log(state);
    if (this.auth.isAuthenticated()) {
      // console.log('paso el Guard');
      return true;
    }
    // console.error('Bloqueado por el Guard');
    this._router.navigate(['/home']);
    return false;
  }
}
