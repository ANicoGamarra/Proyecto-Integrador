import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
import { AcercaDeModalComponent } from '../modal/acerca-de-modal/acerca-de-modal.component';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { FotoPerfilModalComponent } from '../modal/foto-perfil-modal/foto-perfil-modal.component';
import { Persona } from 'src/app/servicios/Persona';




@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  login:any;
  datosbd:any;
  datosPorfolio:any; 
  componente: string = "personas"

  
  constructor(private loginService : LoginServiceService, private modalService: NgbModal, private datosDB: DatosPorfolioService ) { 
 
  }

  ngOnInit(): void {
    /* this.login = this.loginService.getLogueado() */
    this.loginService.LogState().subscribe((login) => (this.login = login));    
    //this.datosbd = this.BaseDatosService.ACERCADE
    //this.cargarDatos()
    this.datosDB.getDatos(this.componente).subscribe(
      (datos) => {
      console.log(datos)        
      this.datosPorfolio = datos
      console.log(this.datosPorfolio)
    });
  }

 
open() {
  
  const modalRef = this.modalService.open(AcercaDeModalComponent,  { centered: true });
 
  modalRef.componentInstance.datos = this.datosbd;
}

openFotoPerfilModal(){
  const modalRef = this.modalService.open(FotoPerfilModalComponent,  { centered: true });
 
  modalRef.componentInstance.datos = this.datosbd;
}

cargarDatos(){
  this.datosDB.getDatos(this.componente).subscribe((datos) => (
    this.datosPorfolio = datos));
    
}
  

}
