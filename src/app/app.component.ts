import { Component } from '@angular/core';

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
  session: ISession;
  constructor(private sessionService: SessionService, private ngRedux: NgRedux<IAppState>){
    this.session = this.sessionService.SessionFetch();
    this.ngRedux.dispatch({type: CHECK_SESSION, session: this.session});
  }

  onLogout(): void {
    this.ngRedux.dispatch({type: CHECK_SESSION, session: this.sessionService.SessionClear()});
  }

}
