import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {

  data = {
    tittle: "Evento prueba",
    description: "Descripcion de prueba",
    startingDate: "Inicio Prueba",
    finishDate: "Final Prueba",
    location: "Localizacion Prueba"
  }

  viewDescripcion: boolean = false;

  @Output() messageEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  openDescription(){
    this.viewDescripcion = !this.viewDescripcion
    if(this.viewDescripcion){
      this.messageEvent.emit(this.data)
    }
    else{
      this.messageEvent.emit(null)
    }
    
  }
}
