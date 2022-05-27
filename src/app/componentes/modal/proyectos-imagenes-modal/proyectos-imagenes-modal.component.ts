import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { ImagenesProyectos } from 'src/app/servicios/interfaces/ImagenesProyectos';

@Component({
  selector: 'app-proyectos-imagenes-modal',
  templateUrl: './proyectos-imagenes-modal.component.html',
  styleUrls: ['./proyectos-imagenes-modal.component.css']
})
export class ProyectosImagenesModalComponent implements OnInit {

  @Input()  id!:number;
  imagenesProyectosTotal!:ImagenesProyectos[] 
  imagenesProyectos!:ImagenesProyectos[]

  constructor(public activeModal: NgbActiveModal, private datosDb:DatosPorfolioService) { }

  ngOnInit(): void {
    console.log(this.id)
    this.traerImagenes();
  }

  traerImagenes(){
    this.datosDb.getDatos("imagenesProyectos").subscribe((datos) => {
      console.log(datos),  
      this.imagenesProyectosTotal = datos
      this.arrayImagenes();    
      });

  
  }

  arrayImagenes(){
    this.imagenesProyectos = this.imagenesProyectosTotal.filter(imagen => imagen.id_proyecto === this.id)
    console.log(this.imagenesProyectos)
  }
  

}
