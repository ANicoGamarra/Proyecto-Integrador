import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import Swal from 'sweetalert2';
import { EducacionModalComponent } from '../modal/educacion-modal/educacion-modal.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

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
  pantallasPequenias:boolean = false;


  constructor(private datosDb:DatosPorfolioService, private loginService: LoginServiceService, private modalService: NgbModal, private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    
  this.loginService.LogState().subscribe((login) => (this.login = login));      //comunica con el servicio para saber si esta logueado o no 
    
    this.actualizarVistaEducacion();                                            //actualiza la vista del componente

    this.responsive.observe('(max-width: 768px)')                               //comprueba si la pantalla es pequeña y modifica el valor de la variable
      .subscribe(result => {

        this.pantallasPequenias = false; 

        if (result.matches) {
          this.pantallasPequenias = true;
        }
    });
  }

  
  abrirModal(id:number){
    const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });      //abre el modal y lo centra  
    modalRef.componentInstance.id = id;                                                         //le pasa el id del elemento a modificar

    modalRef.result.then((data) => {                                                            //cuando se cierra el modal actualiza la vista del componente  
      this.actualizarVistaEducacion();
    }, (reason) => {
    
    })


  }
  agregarEducacion(){
  const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });        //abre el modal y lo centra
    modalRef.componentInstance.eduNueva = this.nuevo;                                           //le pasa un booleano para saber si es una nueva educacion o una modificacion 
    modalRef.result.then((data) => {                                                            //cuando se cierra el modal actualiza la vista del componente
      this.actualizarVistaEducacion();
    }, (reason) => {
     
    })
  }

  borrarEducacion(id:number){
    
    this.datosDb.borrar(id, this.componente)
      .subscribe(() => {
        this.actualizarVistaEducacion();
      });
    
  }

  actualizarVistaEducacion(){
   
    this.datosDb.verTodos(this.componente).subscribe((datos) => (
      
      this.datosPorfolio = datos));
  }

  eliminarEducacion(id:number){
    
    Swal.fire({
      title: '¿Desea borrar el titulo?',
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
       this.borrarEducacion(id); 
      }
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.datosPorfolio, event.previousIndex, event.currentIndex);
  }
}
