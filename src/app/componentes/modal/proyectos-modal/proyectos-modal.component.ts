import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { Proyecto } from 'src/app/servicios/interfaces/Proyecto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos-modal',
  templateUrl: './proyectos-modal.component.html',
  styleUrls: ['./proyectos-modal.component.css']
})
export class ProyectosModalComponent implements OnInit {

  
  @Input()  proyecNuevo:boolean;
  @Input()  id!:number;

  componente:string = "proyectos"
  proyec!:Proyecto
  formularioProyecto: FormGroup;

  constructor(public activeModal: NgbActiveModal, private datosDb:DatosPorfolioService, private formulario: FormBuilder) {
    
    this.proyecNuevo = false;
    this.formularioProyecto = formulario.group({
      
      nombre:[''],
      fecha: [''],
      descripcion: [''],
      enlace: [''],
      proyecto_portada:['']
   })

   }

  ngOnInit(): void {
    
    if(this.proyecNuevo === false){
      this.getProyectoId();
    }

  }

  getProyectoId(): void {
    this.datosDb.buscarId(this.id, this.componente).subscribe(dato => {
    
      this.proyec = dato
    
      this.editForm(dato);
    });
  }

  editForm(dato:any){
    this.formularioProyecto.setValue( {
      
      nombre: dato.nombre,
      fecha: dato.fecha,
      descripcion: dato.descripcion,
      enlace: dato.enlace,
      proyecto_portada: dato.proyecto_portada,
  });
}

enviarDatos(){   
  
  if(this.proyecNuevo === true){
    this.proyec = this.formularioProyecto.value
   
    this.agregarProyecto()
  }else{
    this.editarProyecto()
    
  }

  
}

armarModeloProyecto(){
    
  this.proyec.nombre = this.formularioProyecto.value.nombre ,
  
  this.proyec.fecha = this.formularioProyecto.value.fecha,
  
  this.proyec.descripcion = this.formularioProyecto.value.descripcion,
  this.proyec.enlace = this.formularioProyecto.value.enlace
  //console.log("este es el proyecto: " + this.proyec)
  this.actualizarProyecto()
 
}

actualizarProyecto(){
  this.datosDb.editar(this.proyec, this.componente).subscribe(() => {
    this.activeModal.close();     
});
}

enviarProyecto(){
  this.proyecNuevo = false;
  console.log("este es el proyecto: " + this.proyec)
    this.datosDb.agregar(this.proyec, this.componente)
      .subscribe(xp => {
        console.log(this.proyec)
        this.activeModal.close(); 
      });
   
}

editarProyecto() {
  
  Swal.fire({
    title: '¿Desea guardar los cambios?',
    //showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    //denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('¡Guardados!', '', 'success')
      this.armarModeloProyecto()
    
      
    } /*else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }*/
  })
  
}

agregarProyecto() {
  Swal.fire({
    title: '¿Desea agregar el Proyecto?',
    //showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Agregar',
    //denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('¡Agregado!', '', 'success');
      this.enviarProyecto();
    } 
  })
}


}
