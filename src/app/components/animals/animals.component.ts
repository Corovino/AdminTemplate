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



  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _userService: UserService,
              private _animalService: AnimalService,
              private _UploadImageService: UploadImageService,
              ) {
     this.title = 'Animales';
     this.animal = new Animal('', '', '', 2018 ,'','');
     this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.listAnimal();
  }

  listAnimal(){
    let animals = this._animalService.getAnimals();

    animals.subscribe( response => {

      console.log(response.animals);
      this.animal = response.animals;
    },error => console.log(error))
  }

}
