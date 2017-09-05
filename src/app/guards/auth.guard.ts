import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DialogService } from '../services/dialog.service';


import { ISession } from '../interfaces/session/session.interface';

@Injectable()
export class AuthGuard implements CanActivate {
 /*  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  } */

  private session: ISession;

  constructor( private dialogService: DialogService ){}

  canActivate(){
    this.session  = JSON.parse(sessionStorage.getItem('session'));
    
    if(this.session){
      if((this.session.User.userRestriction > 4)){
        this.dialogService.show('Authentication-Guard Message','You are not allowed for this content.');
      }else{
        return true;
      }
    }
  }
}
