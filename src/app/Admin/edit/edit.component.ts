import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Params } from '@angular/router';
import { GLOBAL } from '../../services/globa';
import { Animal  } from  '../../models/animal'
import { AnimalService } from '../../services/animal.service';
import { UserService } from '../../services/user.service';
import { UploadImageService } from '../../services/upload-image.service';


@Component({
  selector: 'app-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [UserService, AnimalService, UploadImageService]
})
export class EditComponent implements OnInit {

  public title : string ;
  public animal: Animal;
  public filesToUpload: Array<File>;
  public url: string;
  public status: boolean;
  public identity;
  public token;
  public is_edit: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadImageService: UploadImageService
  ) {
    this.title = 'Editar Animal';
    this.is_edit = true;
    this.animal = new Animal('', '', '', 2018 ,'','');
    this.identity = this._userService.getCurrentUser();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.getAnimal();
  }

  onSubmit(){
    let id = this.animal._id;
    this._animalService.putAnimal(this.token, id, this.animal).subscribe(
      response => {

        if(!response){
          this.status = false;
        }else{

          this.status = true;
          this.animal._id = response.message._id;

          if(!this.filesToUpload){
            this._router.navigateByUrl(`/animal/${id}`);
          }else{

            this._uploadImageService.makeFileRequest(`${this.url}upload-image-animal/${this.animal._id}`, [] , this.filesToUpload , this.token , 'image')
              .then( ( result: any ) => {
                  console.log('result', result);
                  this.animal.image = result.image;
                  localStorage.setItem('identity', JSON.stringify(this.animal) );
                  console.log('user',this.animal);
                  this._router.navigateByUrl(`/animal/${id}`);
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


  getAnimal(){
    this._route.params.forEach( (param :Params) => {
      let id = param['id'];
      console.log('id',id);
      this._animalService.getAnimalId(id).subscribe(  response => {
          console.log(response);
          if(!response.animal){
            this._router.navigateByUrl('/home');
          }else{
            this.animal = response.animal;
          }
        },error => {
          console.log(error);
          this._router.navigateByUrl('/home');
        }
      )
    })
  }

}
