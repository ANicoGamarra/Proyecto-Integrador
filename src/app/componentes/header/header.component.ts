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

  /* login:boolean = false; */
  login:any;
  datosPorfolio!:Usuario[];
  componente:string = "usuarios"
  
  constructor(private loginService: LoginServiceService, private datosDb: DatosPorfolioService, private modalService: NgbModal) { }

  ngOnInit(): void {
   
    this.loginService.LogState().subscribe((login) => (this.login = login));
    this.actualizarVistaHeader()
  }

  open() {
  
    const modalRef = this.modalService.open(HeaderModalComponent,  { centered: true });   
    modalRef.componentInstance.usuario = this.datosPorfolio;

    modalRef.result.then((data) => {
      this.actualizarVistaHeader();
    }, (reason) => {
      alert("no funciono")
    })
  }

  actualizarVistaHeader(){
    this.datosDb.getDatos(this.componente).subscribe((datos) => {
     
      this.datosPorfolio = datos
    });
  }

}
