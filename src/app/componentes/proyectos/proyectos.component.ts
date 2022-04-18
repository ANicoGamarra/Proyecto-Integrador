import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import { ProyectosModalComponent } from '../modal/proyectos-modal/proyectos-modal.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  login:any;
  datos:any[] = [];
  datosPorfolio:any;
  componente: string= "proyectos"

  constructor(private datosDb:DatosPorfolioService, private loginService:LoginServiceService, private modalService: NgbModal ) { }

  ngOnInit(): void {
    this.datos = this.datosDb.PROYECTOS;
    /* this.login = this.loginService.getLogueado(); */
    this.loginService.LogState().subscribe((login) => (this.login = login));
    this.datosDb.getDatos(this.componente).subscribe((datos) => (
      //console.log(datos),  
      this.datosPorfolio = datos));
  }

  abrirModal(id:number){
    const modalRef = this.modalService.open(ProyectosModalComponent,  { centered: true });   
    modalRef.componentInstance.datos = this.datos[id];    
    modalRef.componentInstance.id = id;
  }
  agregarProyecto(){
    const modalRef = this.modalService.open(ProyectosModalComponent,  { centered: true });
    modalRef.componentInstance.datos = this.datos;    
  }

  


}
