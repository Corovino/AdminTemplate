import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './globa';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
     'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YTg5ZDBjNjYwMDA0OTEwZGY5Y2M3MzUiLCJuYW1lIjoiIEhlYmVydCIsInN1cm5hbWUiOiJSb21lcm8iLCJlbWFpbCI6InNhc3RvcXVlaEBnbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9VU0VSIiwiaW1hZ2UiOm51bGwsImlhdCI6MTUxOTE3NDUzNywiZXhwIjoxNTIxNzY2NTM3fQ.3gOiKoKuXf2gio4OFwqKzuyD4I9LbybfSJFkWRbIU5I'
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

  updateUser(user_to_update){
      console.log('service update',user_to_update);

      httpOptions.headers.append('authentication', `${this.getToken()}`);

      let params = JSON.stringify(user_to_update);
      return  this._http.put(`${this.url}update/${user_to_update._id}`, params, httpOptions);
  }






}
