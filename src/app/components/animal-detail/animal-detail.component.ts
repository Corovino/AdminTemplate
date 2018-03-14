import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Params } from '@angular/router';
import { GLOBAL } from '../../services/globa';
import { Animal  } from  '../../models/animal'
import { AnimalService } from '../../services/animal.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css'],
  providers: [UserService, AnimalService]
})
export class AnimalDetailComponent implements OnInit {

  public  animal : Animal;
  public url : string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _userService: UserService,
              private _animalService: AnimalService) {
     this.url = GLOBAL.url
  }

  ngOnInit() {
      this.getAnimal();
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
