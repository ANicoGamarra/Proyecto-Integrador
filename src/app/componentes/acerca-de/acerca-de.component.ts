import { Component, Input, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { AcercaDeModalComponent } from '../modal/acerca-de-modal/acerca-de-modal.component';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { FotoPerfilModalComponent } from '../modal/foto-perfil-modal/foto-perfil-modal.component';
import { Persona } from 'src/app/servicios/Persona';
import { Usuario } from 'src/app/servicios/interfaces/Usuario';
import { Educacion } from 'src/app/servicios/interfaces/Educacion';




@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  //@Input() titulo!:string;
  //@Input() fotoPerfil!:string;

  login:any;  
  datosPorfolio!:Persona[]; 
  componente: string = "personas"
  educacion:string = "educaciones"
  titulo!:Educacion[]
  fotoPerfil!:Usuario[]; 

  
  constructor(private loginService : LoginServiceService, private modalService: NgbModal, private datosDb: DatosPorfolioService ) {       
  }

  ngOnInit(): void {
    this.loginService.LogState().subscribe((login) => (this.login = login));        //comunica con el servicio para saber si esta logueado o no  
    this.cargarDatos();
    this.cargarFotoPerfil();
    this.cargarDatoTitulo();
  }

 
open() {
  
  const modalRef = this.modalService.open(AcercaDeModalComponent,  { centered: true });     //abre el modal y lo centra
  modalRef.componentInstance.datosPorfolio = this.datosPorfolio;                            //envia los datos de la persona
  modalRef.result.then((data) => {                                                          //cuando se cierra el modal actualiza la vista del componente
    this.cargarDatos();
  }, (reason) => {
    alert("No se pudo cargar la foto")
  })
}

openFotoPerfilModal(){
  const modalRef = this.modalService.open(FotoPerfilModalComponent,  { centered: true });   //abre el modal y lo centra
  modalRef.componentInstance.usuario = this.fotoPerfil;                                     //envia los datos del usuario
  modalRef.result.then((data) => {                                                          //cuando se cierra el modal actualiza la vista del componente
    this.ngOnInit();
  }, (reason) => {
   
  })
}

cargarDatos(){
  this.datosDb.verTodos(this.componente).subscribe((datos) => (
    this.datosPorfolio = datos
  ));
  
}

cargarFotoPerfil() {
  this.datosDb.verTodos("usuarios").subscribe((datos) => (
    this.fotoPerfil = datos
  ));
    
  }

  cargarDatoTitulo(){
    this.datosDb.verTodos("educaciones").subscribe((data) => (
      this.titulo = data
    ));
  }

}
