import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss'],
})
export class DescripcionComponent implements OnInit {

  @Input() event: any

  constructor() { }

  ngOnInit() {
    console.log("ng on init descripcion")
    console.log(this.event)
  }

}
