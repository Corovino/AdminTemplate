import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GLOBAL } from './globa';
import 'rxjs/add/operator/map';






@Injectable()
export class UploadImageService {

  public url: string;


  constructor( private _http: HttpClient ) {

      this.url = GLOBAL.url;
  }


  makeFileRequest( url: string, params: Array<string>, files: Array<File>, token: string, name: string){

      console.log('upload service', files);
      console.log('url service', url);
      return new Promise( (resolve, reject) => {
          let formData: any  = new FormData();
          let xhr = new XMLHttpRequest();

          for( let i = 0; i <  files.length; i++){
             formData.append(name, files[i], files[i].name);
          }

          xhr.onreadystatechange = () => {

                  if(xhr.status == 200){
                      console.log('up service', xhr.response);
                      let data  = JSON.parse(xhr.response);
                      resolve( data );
                  }else{
                      reject(xhr.response);
                  }

          }

          xhr.open('POST', url, true);
          xhr.setRequestHeader('Authorization', token);
          xhr.send(formData);
      })

  }


}
