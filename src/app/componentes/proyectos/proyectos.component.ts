import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  datos:any[] = [];
  constructor(private datosDb:DatosPorfolioService) { }

  ngOnInit(): void {
    this.datos = this.datosDb.PROYECTOS
  }
  


}
