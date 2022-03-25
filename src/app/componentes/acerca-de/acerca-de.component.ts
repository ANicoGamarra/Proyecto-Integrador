import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'
import { AcercaDeModalComponent } from '../modal/acerca-de-modal/acerca-de-modal.component';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';




@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  login:any;
  datosbd:any;
  titulo:string = "";
  
  constructor(private loginService : LoginServiceService, private dialog: MatDialog, private modalService: NgbModal, private BaseDatosService: DatosPorfolioService ) { }

  ngOnInit(): void {
    /* this.login = this.loginService.getLogueado() */
    this.loginService.LogState().subscribe((login) => (this.login = login));    
    this.datosbd = this.BaseDatosService.ACERCADE
    
  }

  abrirModal(){
    
  }

  closeResult: string = ''
  
 /* open(content:any) {
  this.modalService.open(content).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}  */

/* private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
} */

open(datos:any) {
  const modalRef = this.modalService.open(AcercaDeModalComponent);
  modalRef.componentInstance.my_modal_title = 'I your title';
  modalRef.componentInstance.my_modal_content = 'I am your content';
  modalRef.componentInstance.datos = this.datosbd;
}
  

}
