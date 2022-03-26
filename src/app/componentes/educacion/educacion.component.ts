import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import { EducacionModalComponent } from '../modal/educacion-modal/educacion-modal.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  login:any;
  datos:any[] = [];
  constructor(private datosDb:DatosPorfolioService, private loginService: LoginServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.datos = this.datosDb.EDUCACION;
    /* this.login = this.loginService.getLogueado(); */
    this.loginService.LogState().subscribe((login) => (this.login = login));    
  }

  
  abrirModal(id:number){
    const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });   
    modalRef.componentInstance.datos = this.datos[id];    
    modalRef.componentInstance.id = id;
  }
  agregarEducacion(){
    const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });
  }

}
