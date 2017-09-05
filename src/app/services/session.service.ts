import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/observable';

import { ISessionCreate } from '../interfaces/session/session-create.interface';
import { ISession } from '../interfaces/session/session.interface';

@Injectable()
export class SessionService {

  private sessionCreateUrl: string = 'session/create';

  constructor(private http: Http) { }
  
  SessionCreate(sessionCreate: ISessionCreate): Observable<ISession>{
    const headers = new Headers();
    headers.append('content-type','application/json');
    const options = new RequestOptions();
    return this.http.post(this.sessionCreateUrl, sessionCreate, options)
            .map(response => response.json())
  }

  SessionFetch(): ISession {
    return JSON.parse(sessionStorage.getItem('session'));
  }

  SessionSave(session: ISession): void {
    sessionStorage.setItem('session',JSON.stringify(session));
  }

  SessionClear(): ISession {
    sessionStorage.clear();
    return JSON.parse(sessionStorage.getItem('session'));
  }

}
