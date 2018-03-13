import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Params } from '@angular/router';
import { GLOBAL } from '../../services/globa';
import { Animal  } from  '../../models/animal'
import { AnimalService } from '../../services/animal.service';
import { UserService } from '../../services/user.service';
import { UploadImageService } from '../../services/upload-image.service';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  providers: [UserService, AnimalService, UploadImageService]
})
export class AnimalsComponent implements OnInit {

  public animal: Animal;
  public title: string;
  public url: string;
  public identity;
  public token;


  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _userService: UserService,
              private _animalService: AnimalService,
              private _UploadImageService: UploadImageService,
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

}
