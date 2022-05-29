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
    
    this.loginService.LogState().subscribe((login) => (this.login = login));    
    
    this.actualizarVistaProyectos();
   

    this.responsive.observe('(max-width: 768px)')
    .subscribe(result => {

      this.pantallasPequenias = false; 

      if (result.matches) {
        this.pantallasPequenias = true;
      }

});

  
  }

  abrirModal(id:number){
    const modalRef = this.modalService.open(ProyectosModalComponent,  { centered: true });       
    modalRef.componentInstance.id = id;
    modalRef.result.then((data) => {
      this.actualizarVistaProyectos();
    }, (reason) => {
     
    })

  }
  agregarProyecto(){
    const modalRef = this.modalService.open(ProyectosModalComponent,  { centered: true });
    modalRef.componentInstance.proyecNuevo = this.nuevo;
    modalRef.result.then((data) => {
      this.actualizarVistaProyectos();
    }, (reason) => {
     
    })
  }

  borrarProyecto(id:number){
    console.log("pasa por aca?")
    this.datosDb.deleteDato(id, this.componente)
      .subscribe(() => {
        console.log(id)
        this.actualizarVistaProyectos();
      });
   
  }

  actualizarVistaProyectos(){
   
    this.datosDb.getDatos(this.componente).subscribe((datos) => (
     
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
    const modalRef = this.modalService.open(ProyectosImagenesModalComponent,  { centered: true, size: 'xl' });       
    modalRef.componentInstance.id = id;
    /*modalRef.result.then((data) => {
      this.actualizarVistaProyectos();
    }, (reason) => {
      alert("no funciono")
    })
*/
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.datosPorfolio, event.previousIndex, event.currentIndex);
    
  }

}
