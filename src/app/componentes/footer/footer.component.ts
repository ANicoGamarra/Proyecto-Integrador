import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  datosPorfolio:any;
  componente:string = "personas"
  usuario:any;
  

  constructor( private datosDb: DatosPorfolioService) { }

  ngOnInit(): void {
    this.datosDb.verTodos(this.componente).subscribe((datos) => (
    
      this.datosPorfolio = datos));

      this.datosDb.verTodos("usuarios").subscribe((datos) => (
       
        this.usuario = datos));  

  }






}
