import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface event{
  id: string;
  eventNombre: string;
  eventInicioDia: string;
  eventInicioHora: string;
  eventTerminaDia: string;
  eventTerminaHora: string;
  eventDescripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  createEvent(
    eventNombre: string, 
    eventInicioDia: string, 
    eventInicioHora: string, 
    eventTerminaDia: string, 
    eventTerminaHora: string, 
    eventDescripcion: string
  ): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`eventList/${id}`).set({
      id,
      eventNombre,
      eventInicioDia,
      eventInicioHora,
      eventTerminaDia,
      eventTerminaHora,
      eventDescripcion
    })
  }

  getEventList(): Observable<event[]> {
    return this.firestore.collection<event>(`eventList`).valueChanges();
  }

}
