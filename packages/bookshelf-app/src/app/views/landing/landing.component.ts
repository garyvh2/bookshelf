import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  precio = 0;
  precioOpciones: any = {
    floor: 0,
    ceil: 15000000
  };
  tamano = 0;
  tamanoOpciones: any = {
    floor: 0,
    ceil: 2500
  };

  constructor() {}

  ngOnInit() {}
}
