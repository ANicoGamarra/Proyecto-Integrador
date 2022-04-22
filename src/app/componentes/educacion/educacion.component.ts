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
  datosPorfolio:any;
  nuevo:boolean = true
  componente:string = "educaciones";
  constructor(private datosDb:DatosPorfolioService, private loginService: LoginServiceService, private modalService: NgbModal) { }

  ngOnInit(): void {
    
    this.loginService.LogState().subscribe((login) => (this.login = login));    
    
    this.actualizarVistaEducacion()
  }

  
  abrirModal(id:number){
    const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });       
    modalRef.componentInstance.id = id;

    modalRef.result.then((data) => {
      this.actualizarVistaEducacion();
    }, (reason) => {
      alert("no funciono")
    })


  }
  agregarEducacion(){
    const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });
    modalRef.componentInstance.eduNueva = this.nuevo;
    modalRef.result.then((data) => {
      this.actualizarVistaEducacion();
    }, (reason) => {
      alert("no funciono")
    })
  }

  eliminarEducacion(id:number){
    
    this.datosDb.deleteDato(id, this.componente)
      .subscribe(() => {
        this.actualizarVistaEducacion();
      });
      console.log(id)
  }

  actualizarVistaEducacion(){
   
    this.datosDb.getDatos(this.componente).subscribe((datos) => (
      //console.log(datos),  
      this.datosPorfolio = datos));
  }

}
