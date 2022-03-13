import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  datos:any[] = []; 
  constructor(private datosDb:DatosPorfolioService ) { }

  ngOnInit(): void {
   this.datos = this.datosDb.EXPERIENCIA
   console.log(this.datos)
  }

}
