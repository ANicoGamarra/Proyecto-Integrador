import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import Swal from 'sweetalert2';
import { ProyectosModalComponent } from '../modal/proyectos-modal/proyectos-modal.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  login:any;
  datosPorfolio:any;
  nuevo:boolean = true
  componente:string = "proyectos";

  constructor(private datosDb:DatosPorfolioService, private loginService:LoginServiceService, private modalService: NgbModal ) { }

  ngOnInit(): void {
    
    this.loginService.LogState().subscribe((login) => (this.login = login));    
    
    this.actualizarVistaProyectos()
  }

  abrirModal(id:number){
    const modalRef = this.modalService.open(ProyectosModalComponent,  { centered: true });       
    modalRef.componentInstance.id = id;
    modalRef.result.then((data) => {
      this.actualizarVistaProyectos();
    }, (reason) => {
      alert("no funciono")
    })

  }
  agregarProyecto(){
    const modalRef = this.modalService.open(ProyectosModalComponent,  { centered: true });
    modalRef.componentInstance.proyecNuevo = this.nuevo;
    modalRef.result.then((data) => {
      this.actualizarVistaProyectos();
    }, (reason) => {
      alert("no funciono")
    })
  }

  borrarProyecto(id:number){
    
    this.datosDb.deleteDato(id, this.componente)
      .subscribe(() => {
        this.actualizarVistaProyectos();
      });
    //  console.log(id)
  }

  actualizarVistaProyectos(){
   
    this.datosDb.getDatos(this.componente).subscribe((datos) => (
      //console.log(datos),  
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
  
  


}
