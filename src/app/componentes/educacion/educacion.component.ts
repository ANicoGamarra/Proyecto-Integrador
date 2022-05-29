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
    
    this.loginService.LogState().subscribe((login) => (this.login = login));    
    
    this.actualizarVistaEducacion();

    
    this.responsive.observe('(max-width: 768px)')
      .subscribe(result => {

        this.pantallasPequenias = false; 

        if (result.matches) {
          this.pantallasPequenias = true;
        }

  });
  }

  
  abrirModal(id:number){
    const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });       
    modalRef.componentInstance.id = id;

    modalRef.result.then((data) => {
      this.actualizarVistaEducacion();
    }, (reason) => {
    
    })


  }
  agregarEducacion(){
    const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });
    modalRef.componentInstance.eduNueva = this.nuevo;
    modalRef.result.then((data) => {
      this.actualizarVistaEducacion();
    }, (reason) => {
     
    })
  }

  borrarEducacion(id:number){
    
    this.datosDb.deleteDato(id, this.componente)
      .subscribe(() => {
        this.actualizarVistaEducacion();
      });
    
  }

  actualizarVistaEducacion(){
   
    this.datosDb.getDatos(this.componente).subscribe((datos) => (
      
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
