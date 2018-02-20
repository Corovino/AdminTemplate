import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ UserService ]
})
export class AppComponent implements OnInit,  DoCheck {
  title = 'app';
  emailContacto: string;
  public identity;


 constructor( private _userService : UserService){

 }
  ngDoCheck(){

     this.identity =this._userService.getCurrentUser();
  }

  ngOnInit(){
     this.identity =this._userService.getCurrentUser();
     console.log(this.identity);
  }

  borrarContacto(){
     localStorage.removeItem('emailContacto');
     localStorage.clear();
     this.emailContacto = null;
  }
}
