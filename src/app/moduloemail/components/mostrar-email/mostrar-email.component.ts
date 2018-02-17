import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-mostrar-email',
  templateUrl: './mostrar-email.component.html',
  styleUrls: ['./mostrar-email.component.css']
})
export class MostrarEmailComponent implements OnInit, DoCheck {

  title = "MOSTRAR email";
  emailContacto : string;


  constructor() {
  }



  ngOnInit() {
  }

  ngDoCheck(){

       this.emailContacto = localStorage.getItem('emailContacto');
       console.log('mostrar',this.emailContacto);
  }

  borrarContacto(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }

}
