import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DialogService } from '../services/dialog.service';


import { ISession } from '../interfaces/session/session.interface';

@Injectable()
export class LoginGuard implements CanActivate {
  /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  } */

  private session: ISession;
  
    constructor( private dialogService: DialogService ){}
  
    canActivate(){
      this.session  = JSON.parse(sessionStorage.getItem('session'));
      if(!this.session){
        this.dialogService.show('Login-Guard Message','Please login to continue.');
      }else{
        return true;
      }
    }
}
