import { Component, Input, OnInit } from '@angular/core';

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
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss'],
})
export class DescripcionComponent implements OnInit {

  @Input() e:event 

  constructor() { }

  ngOnInit() {
    console.log("ng on init descripcion")
    console.log(this.e)
  }

}
