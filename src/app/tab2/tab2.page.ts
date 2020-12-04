import { FirestoreService } from './../services/data/firestore.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

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
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public createEventForm
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    formBuilder: FormBuilder,
    private firestoreService: FirestoreService,
    private router: Router
    ) {
      this.createEventForm = formBuilder.group({
        eventNombre: ['', Validators.required],
        eventInicioDia: ['', Validators.required],
        eventInicioHora: ['', Validators.required],
        eventTerminaDia: ['', Validators.required],
        eventTerminaHora: ['', Validators.required],
        eventDescripcion: ['', Validators.required],
      });
    }

  async createEvent(){
    const loading = await this.loadingCtrl.create();
    const eventNombre = this.createEventForm.value.eventNombre;
    const eventInicioDia = this.createEventForm.value.eventInicioDia;
    const eventInicioHora = this.createEventForm.value.eventInicioHora;
    const eventTerminaDia = this.createEventForm.value.eventTerminaDia;
    const eventTerminaHora = this.createEventForm.value.eventTerminaHora;
    const eventDescripcion = this.createEventForm.value.eventDescripcion;
    console.log(eventNombre);

    this.firestoreService
      .createEvent(eventNombre, eventInicioDia, eventInicioHora, eventTerminaDia, eventTerminaHora, eventDescripcion)
      .then(
        () => {
          loading.dismiss().then(()=> {
            this.router.navigateByUrl('');
          });
        },
        error => {
          loading.dismiss().then(()=>{
            console.error(error);
          });
        }
      );

    return await loading.present();
  }

}
