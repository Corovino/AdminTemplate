import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, Params  } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { UploadImageService } from '../../services/upload-image.service';
import {GLOBAL} from "../../services/globa";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [ UserService, UploadImageService ]
})
export class UserEditComponent implements OnInit {

  public title: string;
  public url: string;
  public user: User;
  public filesToUpload: Array<File>;
  public identity;
  public token;
  public status;

  constructor( private _userService: UserService, private _uploadService : UploadImageService ) {
       this.title     ="Edit Profile";
       this.identity  = this._userService.getCurrentUser();
       this.token     = this._userService.getToken();
       this.user      = this.identity;
       this.url       = GLOBAL.url;
  }

  ngOnInit() {

  }

  onSubmit(){
    console.log('user',this.user);
    try{

        this._userService.updateUser(this.user).subscribe(
            response => {
                  if(!response){
                      this.status = 'error';
                  }else{
                      localStorage.setItem('identity', JSON.stringify(this.user) );
                      console.log('url:', `${this.url}upload-image/${this.user._id}`);
                      console.log('filesToUpload:',this.filesToUpload);
                      this._uploadService.makeFileRequest(`${this.url}upload-image/${this.user._id}`, [] , this.filesToUpload , this.token , 'image')
                        .then( ( result: any ) => {
                              console.log('result', result.image);
                              this.user.image = result.image;
                              localStorage.setItem('identity', JSON.stringify(this.user) );
                              console.log(this.user);
                        })
                  }
            },
            error => {
                console.log(error);
                let errorMessage = <any>error;
                if(errorMessage != null){
                     this.status = 'error';
                }

            }
        )

    } catch (err){
        console.log('ffff',err);
    }
  }


  fileChangeEvent( fileInput: any ){

      this.filesToUpload = <Array<File>>fileInput.target.files;
      console.log('files',this.filesToUpload);
  }

}
