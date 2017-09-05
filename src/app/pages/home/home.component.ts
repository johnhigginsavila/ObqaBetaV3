import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { Observable } from 'rxjs/observable';
import { Subscription } from 'rxjs/subscription';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { SessionService } from '../../services/session.service';
import { AuthenticationService } from '../../services/authentication.service';

import { ISessionCreate } from '../../interfaces/session/session-create.interface';
import { IUserNew } from '../../interfaces/user/user-new.interface';
import { ICsrf } from '../../interfaces/authentication/csrf.interface';

import { NgRedux, select } from 'ng2-redux';
import { SIGN_UP_ATTEMPT } from './actions';
import { GET_CSRF, SIGNED_UP, LOGED_IN, CLEAR_SESSION, SET_ACTIVE_PAGE, CHECK_SESSION } from '../../global-store/actions';
import { IAppState } from '../../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @select(s => s.homePage.signUpAttempt) signUpAttempt;
  @select(s => s.global._csrf) _csrf;
  @select(s => s.global.session) session;

  private GetCsrf: Subscription;
  private UserCreate: Subscription;
  private SessionCreate: Subscription;

  constructor(private route: ActivatedRoute,private ngRedux: NgRedux<IAppState>, private authenticationService: AuthenticationService, private userService: UserService, private sessionService: SessionService) { 
    this.GetCsrf =  this.authenticationService.GetCsrf()
        .subscribe(
          csrf => {
            this.ngRedux.dispatch({type: GET_CSRF, _csrf:csrf._csrf});
          },
          err => console.log(err)
        )
  }



  ngOnInit() {
    this.ngRedux.dispatch({type:SET_ACTIVE_PAGE, page:this.route.snapshot.url.toString()});
  }

  ngOnDestroy() {
    (this.GetCsrf) ? (this.GetCsrf.unsubscribe()): null;
    (this.UserCreate) ? (this.UserCreate.unsubscribe()): null;
    (this.SessionCreate) ? (this.SessionCreate.unsubscribe()): null;
  }

  onLogin(loginData: ISessionCreate): void{
    this.SessionCreate = this.sessionService.SessionCreate(loginData)
                          .subscribe(
                            session => {
                              this.sessionService.SessionSave(session);
                              this.ngRedux.dispatch({
                                type: LOGED_IN,
                                session: session,
                                logedIn:{status: true, message:'Log in Success!'}
                              });
                            },
                            err => {
                              this.ngRedux.dispatch({
                                type: LOGED_IN,
                                session:null,
                                logedIn:{status: false, message:err._body}
                              })
                            }
                          )
  }

  onSignUpAttempt(): void{
    this.ngRedux.dispatch({type: SIGN_UP_ATTEMPT, signUpAttempt: true});
  }

  onSignUpCancel(toggle: boolean): void{
    this.ngRedux.dispatch({type: SIGN_UP_ATTEMPT, signUpAttempt: toggle});
    
  }

  getSignUpData(signupData: IUserNew): void{
    this.UserCreate = this.userService.CreateUser(signupData)
                        .subscribe(
                          session => {
                            this.sessionService.SessionSave(session);
                            this.ngRedux.dispatch({
                              type: SIGNED_UP,
                              session:session,
                              signedUp:{status:true, message:'Sign up Success!'},
                              logedIn:{status:true, message:'Log in success!'}
                            });
                          },
                          err => {
                            this.ngRedux.dispatch({
                              type: SIGNED_UP,
                              signedUp:{status:false, message: err._body}
                            });
                          }
                        );
  }

  onLogout(): void {
    this.ngRedux.dispatch({type: CHECK_SESSION, session: this.sessionService.SessionClear()});
  }

}
