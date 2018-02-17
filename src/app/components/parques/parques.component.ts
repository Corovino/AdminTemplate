import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit {

  @Input() nombre: string;
  public metros: string;
  public vegetacion: string;
  public abierto: boolean;

  @Output() pasarPadre = new EventEmitter();

  constructor() {
        this.nombre = "castilla";
        this.metros = "450";
        this.vegetacion = "alta";
        this.abierto = true;
  }

  ngOnInit() {
  }

  mostrarPadre(){
       this.pasarPadre.emit({
          'nombre':this.nombre,
          'metros':this.metros,
          'vegetacion':this.vegetacion ,
          'abierto':this.abierto
       });
  }

}
