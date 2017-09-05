import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/observable';

import { IUserNew } from '../interfaces/user/user-new.interface';
import { ISession } from '../interfaces/session/session.interface';

@Injectable()
export class UserService {

  private userNewUrl: string = 'user/create';
  constructor(private http: Http) { }

  CreateUser(userNew: IUserNew): Observable<ISession> {
    const headers = new Headers();
    headers.append('Content-type','application/json');
    const options = new RequestOptions({headers:headers});
    return this.http.post(this.userNewUrl, userNew, options)
            .map(response => response.json())
  }

}
