import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { ImagenesProyectos } from 'src/app/servicios/interfaces/ImagenesProyectos';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import Swal from 'sweetalert2';
import { ProyectosImagenesModalComponent } from '../modal/proyectos-imagenes-modal/proyectos-imagenes-modal.component';
import { ProyectosModalComponent } from '../modal/proyectos-modal/proyectos-modal.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  login:any;
  datosPorfolio:any;
  
  nuevo:boolean = true;
  componente:string = "proyectos";
  pantallasPequenias:boolean = false;
  dragAndDrop:boolean = true

  constructor(private datosDb:DatosPorfolioService, private loginService:LoginServiceService, private modalService: NgbModal, private modalImagenes: NgbModal, private responsive: BreakpointObserver ) { }

  ngOnInit(): void {
    
    this.loginService.LogState().subscribe((login) => (this.login = login));      //comunica con el servicio para saber si esta logueado o no   
    
    this.actualizarVistaProyectos();                                              //actualiza la vista de los proyectos
   

    this.responsive.observe('(max-width: 768px)')                                 //comprueba si la pantalla es pequeña
    .subscribe(result => {

      this.pantallasPequenias = false; 

      if (result.matches) {
        this.pantallasPequenias = true;
      }

});

  
  }

  abrirModal(id:number){
    const modalRef = this.modalService.open(ProyectosModalComponent,  { centered: true });      //abre el modal y lo centra 
    modalRef.componentInstance.id = id;                                                         //le pasa el id del proyecto
    modalRef.result.then((data) => {                                                            //cuando se cierra el modal
      this.actualizarVistaProyectos();
    }, (reason) => {
     
    })

  }
  agregarProyecto(){
    const modalRef = this.modalService.open(ProyectosModalComponent,  { centered: true });      //abre el modal y lo centra
    modalRef.componentInstance.proyecNuevo = this.nuevo;                                        //le pasa un booleano para saber si es un nuevo proyecto o no
    modalRef.result.then((data) => {                                                            //cuando se cierra el modal actualiza la vista del componente
      this.actualizarVistaProyectos();
    }, (reason) => {
     
    })
  }

  borrarProyecto(id:number){
    console.log("pasa por aca?")
    this.datosDb.borrar(id, this.componente)
      .subscribe(() => {
        console.log(id)
        this.actualizarVistaProyectos();
      });
   
  }

  actualizarVistaProyectos(){
   
    this.datosDb.verTodos(this.componente).subscribe((datos) => (
     
      this.datosPorfolio = datos));
  }

  eliminarProyecto(id:number){
    
    Swal.fire({
      title: '¿Desea borrar el proyecto?',
      text: "No se podrá revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Borrado!',
        );
       this.borrarProyecto(id); 
      }
    })
  }
  
  
  abrirModalImagenes(id:number){
    const modalRef = this.modalService.open(ProyectosImagenesModalComponent,  { centered: true, size: 'xl' });      //abre el modal y lo centra    
    modalRef.componentInstance.id = id;                                                                             //le pasa el id del proyecto
    
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.datosPorfolio, event.previousIndex, event.currentIndex);
    
  }

}
