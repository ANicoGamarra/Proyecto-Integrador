import { Component, Input, OnChanges, OnInit, SimpleChanges  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import Swal from 'sweetalert2';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs/operators';

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
   

    this.loginService.LogState().subscribe((login) => (this.login = login));    
    
    this.actualizarVistaExperiencia()   

    
    this.responsive.observe('(max-width: 768px)')
      .subscribe(result => {

        this.pantallasPequenias = false; 

        if (result.matches) {
          this.pantallasPequenias = true;
        }

  });
    
  
  
     
  }



  abrirModal(id:number){
    const modalRef = this.modalService.open(ExperienciaModalComponent,  { centered: true });       
    modalRef.componentInstance.id = id;

    modalRef.result.then((data) => {
      this.actualizarVistaExperiencia();
    }, (reason) => {
      alert("no funciono")
    })


  }

  
  agregarExperiencia(){
    const modalRef = this.modalService.open(ExperienciaModalComponent,  { centered: true });
    modalRef.componentInstance.expNueva = this.nuevo;
    modalRef.result.then((data) => {
      this.actualizarVistaExperiencia();
    }, (reason) => {
      alert("no funciono")
    })
    
    
  }

  borrarExperiencia(id:number){
    
    this.datosDb.deleteDato(id, this.componente)
      .subscribe(() => {
        this.actualizarVistaExperiencia();
      });
    //  console.log(id)
  }

  actualizarVistaExperiencia(){
   
    this.datosDb.getDatos(this.componente).subscribe((datos) => (
      //console.log(datos),  
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


  

}
