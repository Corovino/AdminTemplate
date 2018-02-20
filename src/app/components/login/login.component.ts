import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, Params  } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {

  public title: string;
  public user: User;
  public idetity;
  public token;
  public status;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _userService: UserService ) {
      this.title = "soy Loguin";
      this.user = new User(' ',' ',' ',' ',' ','',' ');
  }

  ngOnInit() {
    console.log(this._userService.getToken());
    console.log(this._userService.getCurrentUser());
    console.log(localStorage.getItem('token'));
  }

  onSubmit(){

    this._userService.signUp(this.user).subscribe(
         response => {
             this.idetity = response;
             delete this.idetity.message.password;
             console.log(this.idetity.message);

             if(!this.idetity || !this.idetity.message._id){
                 console.log('Error al tratar de ingresar');
             }else{
                localStorage.setItem('identity', JSON.stringify(this.idetity));
                this._userService.signUp(this.user, true).subscribe(
                   response => {

                       this.token = response;

                       if(this.token.length <= 0 ){
                         console.log('no se genero toekn');
                       }else{

                         localStorage.setItem('token',this.token.token);
                         this.status = 'success';
                         this._router.navigate(['/']);
                       }

                   },
                   error => console.log('error:', error)
                 )

             }

         },
         error => {
               let errorMessage = error;
               if( errorMessage != null ){
                   let body =JSON.parse(error._body);
                   this.status = 'error';
               }
         }
    )

  }

}
