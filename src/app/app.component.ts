import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import {  Router, ActivatedRoute, Params  } from '@angular/router';


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


 constructor( private _userService : UserService,
              private _router: Router){

 }
  ngDoCheck(){
     this.identity =this._userService.getCurrentUser();
  }

  ngOnInit(){
     this.identity =this._userService.getCurrentUser();
  }


  logout(){
     localStorage.clear();
     this.identity = null;
     this._router.navigate(['/']);
  }

  borrarContacto(){
     localStorage.removeItem('emailContacto');
     localStorage.clear();
     this.emailContacto = null;
  }
}
