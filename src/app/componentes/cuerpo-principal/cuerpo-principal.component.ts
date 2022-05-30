import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { Educacion } from 'src/app/servicios/interfaces/Educacion';
import { Usuario } from 'src/app/servicios/interfaces/Usuario';

@Component({
  selector: 'app-cuerpo-principal',
  templateUrl: './cuerpo-principal.component.html',
  styleUrls: ['./cuerpo-principal.component.css']
})
export class CuerpoPrincipalComponent implements OnInit {

  constructor(private datosDb:DatosPorfolioService) { }

  titulo!:Educacion[]
  

  ngOnInit(): void {   
    this.cargarDatoTitulo();
  }


  cargarDatoTitulo(){
    this.datosDb.verTodos("educaciones").subscribe((data) => (
      this.titulo = data
    ));
  }
   


}
