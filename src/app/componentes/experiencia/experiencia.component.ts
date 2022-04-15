import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import { ExperienciaModalComponent } from '../modal/experiencia-modal/experiencia-modal.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  login:any;
  datosPorfolio:any;
  datos:any[] = []; 
  constructor(private datosDb:DatosPorfolioService, private loginService: LoginServiceService,  private modalService: NgbModal ) { }

  ngOnInit(): void {
   this.datos = this.datosDb.EXPERIENCIA
   /* this.login = this.loginServices.getLogueado() */
   this.loginService.LogState().subscribe((login) => (this.login = login));    
   this.datosDb.getDatosExperiencia().subscribe((datos) => (
    //console.log(datos),  
    this.datosPorfolio = datos));
  }

  abrirModal(id:number){
    const modalRef = this.modalService.open(ExperienciaModalComponent,  { centered: true });   
    modalRef.componentInstance.datos = this.datos[id];    
    modalRef.componentInstance.id = id;
  }
  agregarExperiencia(){
    const modalRef = this.modalService.open(ExperienciaModalComponent,  { centered: true });
    modalRef.componentInstance.datos = this.datos;
  }


}
