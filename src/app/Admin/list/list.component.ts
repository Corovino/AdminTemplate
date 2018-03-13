import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Params } from '@angular/router';
import { Animal  } from  '../../models/animal'
import { AnimalService } from '../../services/animal.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UserService, AnimalService]
})
export class ListComponent implements OnInit {

  title = 'List';
  public animal : Animal;


  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _userService: UserService,
              private _animalService: AnimalService) { }

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
