import { Component, OnInit } from '@angular/core';

import { SessionService } from './services/session.service';

import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { CHECK_SESSION } from './global-store/actions';

import { ISession } from './interfaces/session/session.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  newSession: ISession;

  @select(s => s.global.session) session;
  @select(s => s.global.page) page;

  constructor(private sessionService: SessionService, private ngRedux: NgRedux<IAppState>){
    this.newSession = this.sessionService.SessionFetch();
    this.ngRedux.dispatch({type: CHECK_SESSION, session: this.newSession});
  }

  onLogout(): void {
    this.ngRedux.dispatch({type: CHECK_SESSION, session: this.sessionService.SessionClear()});
  }

}