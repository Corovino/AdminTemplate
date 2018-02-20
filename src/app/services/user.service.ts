import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './globa';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class UserService {

  public url : string;
  public identity;
  public token;


  constructor( private _http: HttpClient) {
        this.url = GLOBAL.url;
  }


  register( userToRegister){
      let params = JSON.stringify(userToRegister);
      return this._http.post(`${this.url}register`, params, httpOptions);
  }

  signUp(userToLogin, getToken = null){

    if(getToken != null){
        userToLogin.gettoken = getToken;
    }

    let params = JSON.stringify(userToLogin);
    return this._http.post(`${this.url}login`, params,httpOptions);
  }


  getCurrentUser(){

     let identity = JSON.parse( localStorage.getItem('identity') );

     if(identity != undefined){
         this.identity = identity
     }else{
        this.identity = null;
     }

     return this.identity;
  }

  getToken(){

      let token =  localStorage.getItem('token');

      if(token != undefined){
        this.token = token
      }else{
        this.token = null;
      }

      return this.token;

  }



}
