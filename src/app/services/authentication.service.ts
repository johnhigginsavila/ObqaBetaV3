import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

import { ICsrf } from '../interfaces/authentication/csrf.interface';

@Injectable()
export class AuthenticationService {

  private _csrfTokenUrl: string = 'csrfToken';

  constructor(private http: Http) { }

  GetCsrf(): Observable<ICsrf>{
    const headers = new Headers();
    headers.append('Content-type','application/json');
    const options = new RequestOptions({headers:headers});
    return this.http.get(this._csrfTokenUrl, options)
            .map(response => response.json())
    
  }

}
