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

   })

   }

  ngOnInit(): void {
    console.log(this.proyecNuevo)
    if(this.proyecNuevo === false){
      this.getProyectoId();
    }

  }

  getProyectoId(): void {
    this.datosDb.getDatoId(this.id, this.componente).subscribe(dato => {
      console.log(dato);
      this.proyec = dato
      console.log(this.proyec)
      this.editForm(dato);
    });
  }

  editForm(dato:any){
    this.formularioProyecto.setValue( {
      
      nombre: dato.nombre,
      fecha: dato.fecha,
      descripcion: dato.descripcion,
      enlace: dato.enlace,
  });
}

enviarDatos(){
   
  //console.log(this.formularioExperiencia.value);
  //console.log(this.xp)
  //console.log(this.proyecNuevo)
  //console.log(this.xp)
  if(this.proyecNuevo === true){
    this.proyec = this.formularioProyecto.value
    console.log(this.proyec)
    //console.log("si es nueva deberia salir esto")
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

  this.actualizarProyecto()
  //console.log(this.xp)
}

actualizarProyecto(){
  this.datosDb.updateDato(this.proyec, this.componente).subscribe(() => {
    this.activeModal.close();     
});
}

enviarProyecto(){
  this.proyecNuevo = false;
  
    this.datosDb.addDato(this.proyec, this.componente)
      .subscribe(xp => {
        this.activeModal.close(); 
      });
    //console.log(this.xp)
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
