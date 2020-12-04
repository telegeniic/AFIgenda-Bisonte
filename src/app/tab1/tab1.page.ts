import { FirestoreService } from './../services/data/firestore.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

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
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public eventList: Observable<event[]>;
  event:any;
  constructor(
    private firestoreService: FirestoreService
  ) {}

  ngOnInit() {
    this.eventList = this.firestoreService.getEventList();
  }

  receiveMessage($event){
    this.event = $event
    console.log(this.event)
  }
}
