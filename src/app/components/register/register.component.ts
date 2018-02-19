import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, Params  } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {

  public title: string;
  public user: User;
  public message: string;
  public status: boolean;

  constructor( private _route: ActivatedRoute,
               private _router: Router,
               private _userService: UserService ) {
     this.title = "soy registro";
     this.user = new User(' ',' ',' ',' ',' ','admin',' ');
  }

  ngOnInit() {
    //console.log(this._userService.register());
  }

  onSubmit(){
      this._userService.register(this.user).subscribe(
           response => {
               if(response){
                 this.status = true;
                 console.log(response);
                 this.user = new User(' ',' ',' ',' ',' ','admin',' ');
               }
             this.status = false;
           },
           error => console.log(error)
      )
      console.log(this.user);
  }

}
