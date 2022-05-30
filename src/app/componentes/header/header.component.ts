import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModalComponent } from '../modal/header-modal/header-modal.component';
import { Usuario } from 'src/app/servicios/interfaces/Usuario';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  login:any;
  datosPorfolio!:Usuario[];
  componente:string = "usuarios"
  loading:boolean =false;
  isLoading$ = this.loginService.isLoading$;
  
  constructor(private loginService: LoginServiceService, private datosDb: DatosPorfolioService, private modalService: NgbModal) { }

  ngOnInit(): void {
   
    this.loginService.LogState().subscribe((login) => (this.login = login));      //comunica con el servicio para saber si esta logueado o no 
    this.actualizarVistaHeader()                                                  //actualiza la vista del header
  }

  open() {
  
    const modalRef = this.modalService.open(HeaderModalComponent,  { centered: true });   //abre el modal y lo centra
    modalRef.componentInstance.usuario = this.datosPorfolio;                                  //envia los datos del usuario

    modalRef.result.then((data) => {
      this.actualizarVistaHeader();
    }, (reason) => {
      
    })
  }

  actualizarVistaHeader(){
    this.loading = true
    this.datosDb.verTodos(this.componente).subscribe((datos) => {
     
      this.datosPorfolio = datos
      this.loading=false
    });
  }

}
