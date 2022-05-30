import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import Swal from 'sweetalert2';
import { BreakpointObserver } from '@angular/cdk/layout';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { ExperienciaModalComponent } from '../modal/experiencia-modal/experiencia-modal.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  login:any;
  datosPorfolio:any;
  nuevo:boolean = true
  componente:string = "experiencias";
  
  pantallasPequenias:boolean = false;
  
  

  constructor(private datosDb:DatosPorfolioService, private loginService: LoginServiceService,  private modalService: NgbModal, private responsive: BreakpointObserver ) { }

  ngOnInit(): void {
   

    this.loginService.LogState().subscribe((login) => (this.login = login));     //comunica con el servicio para saber si esta logueado o no 
    
    this.actualizarVistaExperiencia()                                            //actualiza la vista de experiencias  

    
    this.responsive.observe('(max-width: 768px)')                               //comprueba si la pantalla es pequeña
      .subscribe(result => {

        this.pantallasPequenias = false; 

        if (result.matches) {
          this.pantallasPequenias = true;
        }

  });
    
  
  
     
  }



  abrirModal(id:number){
    const modalRef = this.modalService.open(ExperienciaModalComponent,  { centered: true });       //abre el modal y lo centra
    modalRef.componentInstance.id = id;                                                            //le pasa el id de la experiencia

    modalRef.result.then((data) => {
      this.actualizarVistaExperiencia();
    }, (reason) => {
      
    })


  }

  
  agregarExperiencia(){
    const modalRef = this.modalService.open(ExperienciaModalComponent,  { centered: true });    //abre el modal y lo centra
    modalRef.componentInstance.expNueva = this.nuevo;                                           //le pasa un booleano para saber si es una nueva experiencia o una editada
    modalRef.result.then((data) => {                                                            //cuando se cierra el modal actualiza la vista del componente
      this.actualizarVistaExperiencia();
    }, (reason) => {
     
    })
    
    
  }

  borrarExperiencia(id:number){
    
    this.datosDb.borrar(id, this.componente)
      .subscribe(() => {
        this.actualizarVistaExperiencia();
      });
   
  }

  actualizarVistaExperiencia(){
   
    this.datosDb.verTodos(this.componente).subscribe((datos) => (
    
      this.datosPorfolio = datos));
  }

  

  eliminarExperiencia(id:number){
    
    Swal.fire({
      title: '¿Desea borrar la experiencia?',
      text: "No se podrá revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Borrada!',
                   
        );
       this.borrarExperiencia(id); 
      }
    })
  }

  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.datosPorfolio, event.previousIndex, event.currentIndex);
  }
  

}
