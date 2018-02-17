import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  public nombreDelParque: string;
  constructor() { }

  ngOnInit() {
  }

  mostrarNombre(){
       console.log(this.nombreDelParque);
  }

  verDatosPadre(event){
     console.log('event',event);
  }

}
