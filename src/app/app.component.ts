import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import {  Router, ActivatedRoute, Params  } from '@angular/router';
import { GLOBAL } from './services/globa';


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
  public url: string;


 constructor( private _userService : UserService,
              private _router: Router){
      this.url = GLOBAL.url;
 }
  ngDoCheck(){
     this.identity =this._userService.getCurrentUser();


  }

  ngOnInit(){
     this.identity =this._userService.getCurrentUser();
     console.log('app identity',this.identity);
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
