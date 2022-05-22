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
  educacion:string = "educaciones"
  titulo:any
  fotoPerfil:any;
  foto:string = "";
  constructor(private loginService : LoginServiceService, private modalService: NgbModal, private datosDb: DatosPorfolioService ) { 
    
    
    
  }

  ngOnInit(): void {
    /* this.login = this.loginService.getLogueado() */
    this.loginService.LogState().subscribe((login) => (this.login = login));        
    this.cargarDatos();
    
    
  }

 
open() {
  
  const modalRef = this.modalService.open(AcercaDeModalComponent,  { centered: true });
  
  modalRef.componentInstance.datosPorfolio = this.datosPorfolio;
  modalRef.componentInstance.datostitulo = this.titulo[1];
  modalRef.result.then((data) => {
    this.cargarDatos();
  }, (reason) => {
    alert("no funciono")
  })
}

openFotoPerfilModal(){
  const modalRef = this.modalService.open(FotoPerfilModalComponent,  { centered: true });
 
  modalRef.componentInstance.datosPorfolio = this.datosPorfolio;
  modalRef.result.then((data) => {
    this.cargarDatos();
  }, (reason) => {
    alert("no funciono")
  })
}

cargarDatos(){
  this.datosDb.getDatos(this.componente).subscribe((datos) => {
    console.log(datos)
    this.datosPorfolio = datos
  });
  this.cargarFotoPerfil();
}

cargarDatoTitulo(){
  
  this.datosDb.getDatos("educaciones").subscribe((data) => {
    console.log(data)
    this.titulo = data
  });

}

cargarFotoPerfil() {

  this.datosDb.getDatos("usuarios").subscribe((datos) => {
    console.log(datos)
    this.fotoPerfil = datos
  });
    
    this.cargarDatoTitulo();
}
  
filtrarFotoPerfil() {
  this.foto = this.fotoPerfil[0].foto_perfil
}

}
