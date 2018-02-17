import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  DoCheck {
  title = 'app';
  emailContacto: string;


  ngDoCheck(){
     this.emailContacto = localStorage.getItem('emailContacto');
  }


  borrarContacto(){
     localStorage.removeItem('emailContacto');
     localStorage.clear();
     this.emailContacto = null;
  }
}
