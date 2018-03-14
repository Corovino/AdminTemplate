import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable} from 'rxjs';
import 'rxjs/operator/map';
import { GLOBAL } from './globa';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YTg5ZDBmMjYwMDA0OTEwZGY5Y2M3MzYiLCJuYW1lIjoiSGViZXJ0Iiwic3VybmFtZSI6IlJtZXJvLTIiLCJlbWFpbCI6InJfc2FzdG9xdWVAaG90bWFpbC5jb20iLCJyb2xlIjoiUk9MRV9BRE1JTiIsImltYWdlIjpudWxsLCJpYXQiOjE1MjAzODU4ODUsImV4cCI6MTUyMjk3Nzg4NX0.3lssFn64hw99CFu6mvFutGYhJMwQRorhp_b4HT-IQ9Y'
  })
};

@Injectable()
export class AnimalService {

  public url: string;
  public httpOptions: any;

  constructor(private _http: HttpClient) {
       this.url = GLOBAL.url;
  }


  addAnimal(token, animal):Observable <any>{
       console.log('animal  service',animal);
       let data = {
          name: animal.name,
          description: animal.description,
          year: animal.year,
          image:'',
          user: ''
       }
       let params = JSON.stringify(data);



       return this._http.post(`${this.url}animales`, params, httpOptions);
  }


  getAnimals() : Observable <any> {
      return this._http.get(`${this.url}animales`);
  }

  getAnimalId( id : any) : Observable <any> {
    return this._http.get(`${this.url}animal/${id}`);
  }

  putAnimal(toekn : string, id: string, animal :any ) : Observable <any>{
     let params = JSON.stringify(animal);

     return  this._http.put(`${this.url}animal/${id}`, params, httpOptions);
  }

  deleteAnimal(toekn : string, id: string) : Observable <any>{

     return  this._http.put(`${this.url}animal/${id}`,  httpOptions);
  }


}
