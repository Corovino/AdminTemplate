import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private _ruter: Router,
    private _userService: UserService,
  ){

  }

  canActivate(
    /*next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;*/

    ){
        let identity = this._userService.getCurrentUser();

        if(  identity && identity.message.role == 'ROLE_ADMIN'){
            return true;
        }

        this._ruter.navigate(['/home']);
        return false;

  }


}

