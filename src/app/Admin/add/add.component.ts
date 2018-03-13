import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Params } from '@angular/router';
import { GLOBAL } from '../../services/globa';
import { Animal  } from  '../../models/animal'
import { AnimalService } from '../../services/animal.service';
import { UserService } from '../../services/user.service';
import { UploadImageService } from '../../services/upload-image.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [UserService, AnimalService, UploadImageService]
})
export class AddComponent implements OnInit {

  public animal: Animal;
  public filesToUpload: Array<File>;
  public title: string;
  public url: string;
  public status: boolean;
  public identity;
  public token;



  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _userService: UserService,
              private _animalService: AnimalService,
              private _uploadImageService: UploadImageService,
  ) {
    this.title = 'Añadir';
    this.animal = new Animal('', '', '', 2018 ,'','');
    this.identity = this._userService.getCurrentUser();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log('animal c ready');
  }


  onSubmit(){

    this._animalService.addAnimal(this.token, this.animal).subscribe(
          response => {

            if(!response){
                this.status = false;
            }else{

                this.status = true;
                this.animal._id = response.message._id;

                if(!this.filesToUpload){
                    this._router.navigateByUrl('/admin/list');
                }else{

                  this._uploadImageService.makeFileRequest(`${this.url}upload-image-animal/${this.animal._id}`, [] , this.filesToUpload , this.token , 'image')
                    .then( ( result: any ) => {
                      console.log('result', result);
                      this.animal.image = result.image;
                      localStorage.setItem('identity', JSON.stringify(this.animal) );
                      console.log('user',this.animal);
                      this._router.navigateByUrl('/admin/list');
                    }, error => console.log(error)
                    );
                }

            }

          },error  => {
               let errorMessage = error;

               if(errorMessage != null){
                  this.status = false;
               }

               console.log(errorMessage);
          }
    )
  }

  fileChangeEvent( fileInput: any ){

    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log('files',this.filesToUpload);
  }

}
