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

  diaI:Date
  horaI:Date
  diaITxt:String
  horaITxt:String
  diaF:Date
  horaF:Date
  diaFTxt:String
  horaFTxt:String
  viewDescripcion: boolean = false;
  @Input() e:event;
  @Output() messageEvent = new EventEmitter<any>();

  constructor() {
    
   }

  ngOnInit() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.diaI = new Date(this.e.eventInicioDia)
    this.diaITxt = `${this.diaI.toLocaleDateString('es-MX',options)}`
    this.horaI = new Date(this.e.eventInicioHora);
    this.horaITxt = `${this.horaI.toLocaleTimeString('es-MX',{hour: '2-digit', minute:'2-digit'})}`;
    this.diaF = new Date(this.e.eventTerminaDia)
    this.diaFTxt = `${this.diaF.toLocaleDateString('es-MX',options)}`
    console.log(this.diaITxt);
    this.horaF = new Date(this.e.eventTerminaHora);
    this.horaFTxt = `${this.horaF.toLocaleTimeString('es-MX',{hour: '2-digit', minute:'2-digit'})}`;
  }

  openDescription(){
    this.diaI = new Date(this.e.eventInicioDia)
    console.log(this.diaI.getMonth());
    console.log(this.diaF);
    this.viewDescripcion = !this.viewDescripcion
    if(this.viewDescripcion){
      this.messageEvent.emit(this.e)
    }
    else{
      this.messageEvent.emit(null)
    }
    
  }
}
