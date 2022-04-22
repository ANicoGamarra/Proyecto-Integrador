import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModalComponent } from '../modal/header-modal/header-modal.component';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /* login:boolean = false; */
  login:any;
  datosPorfolio:any;
  componente:string = "usuarios"
  
  constructor(private loginService: LoginServiceService, private datosDB: DatosPorfolioService, private modalService: NgbModal) { }

  ngOnInit(): void {
    /* this.login = this.loginService.getLogueado() */
    this.loginService.LogState().subscribe((login) => (this.login = login));
    this.actualizarVistaHeader()
  }

  open() {
  
    const modalRef = this.modalService.open(HeaderModalComponent,  { centered: true });   
    modalRef.componentInstance.datos = this.datosPorfolio;

    modalRef.result.then((data) => {
      this.actualizarVistaHeader();
    }, (reason) => {
      alert("no funciono")
    })
  }

  actualizarVistaHeader(){
    this.datosPorfolio = this.datosDB.getDatos(this.componente)
  }

}
