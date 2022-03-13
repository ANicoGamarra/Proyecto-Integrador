import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  datos:any[] = [];
  constructor(private datosDb:DatosPorfolioService) { }

  ngOnInit(): void {
    this.datos = this.datosDb.EDUCACION
  }

}
