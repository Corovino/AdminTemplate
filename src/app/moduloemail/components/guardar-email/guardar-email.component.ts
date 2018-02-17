import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guardar-email',
  templateUrl: './guardar-email.component.html',
  styleUrls: ['./guardar-email.component.css']
})
export class GuardarEmailComponent implements OnInit {

  title = "guardar email";
  emailContacto : string;

  constructor() { }

  ngOnInit() {

  }



  guardarEmail(){
    console.log('me tocaste',this.emailContacto);
    localStorage.setItem('emailContacto', this.emailContacto);
  }

}
