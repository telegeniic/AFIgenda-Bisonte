import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface event{
  id: string;
  eventNombre: string;
  eventInicioDia: string;
  eventInicioHora: string;
  eventTerminaDia: string;
  eventTerminaHora: string;
  eventDescripcion: string;
}

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
  @Input() e:event;
  @Output() messageEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  openDescription(){
    this.viewDescripcion = !this.viewDescripcion
    if(this.viewDescripcion){
      this.messageEvent.emit(this.e)
    }
    else{
      this.messageEvent.emit(null)
    }
    
  }
}
