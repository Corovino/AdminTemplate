import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './globa';

@Injectable()
export class UserService {

  public url : string;

  constructor( private _http: Http) {
        this.url = GLOBAL.url;
  }


  register( userToRegister){
      let params = JSON.stringify(userToRegister);
      let headers = new Headers({'Content-Type': 'application/json'});
      return this._http.post(`${this.url}register`, params,{headers:headers});
  }

  signUp(userToLogin, getToken = null){

    let params = JSON.stringify(userToLogin);
    let headers = new Headers({'Content-Type': 'application/json'});
    return this._http.post(`${this.url}login`, params,{headers:headers});

  }

}
