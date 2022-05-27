import { Component, Input, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { Educacion } from 'src/app/servicios/interfaces/Educacion';
import { Persona } from 'src/app/servicios/interfaces/Persona';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-acerca-de-modal',
  templateUrl: './acerca-de-modal.component.html',
  styleUrls: ['./acerca-de-modal.component.css']
})

export class AcercaDeModalComponent implements OnInit {

//  @Input() datosPorfolio!:Persona []; 


  formularioAcerca!: FormGroup;
  formularioTitulo!: FormGroup;  
  component: string = "personas"
  datosPorfolio:Persona [] = []
  datosTitulo:Educacion [] = [];
  


  constructor(public activeModal: NgbActiveModal, private formulario: FormBuilder, private datosDb:DatosPorfolioService) { 
  this.formularioAcerca = formulario.group({
    id_persona:[''],
    nombre: [''],
    apellido: [''],
    
    fecha_nac: [''],
    descripcion:[''],
    
 })
this.formularioTitulo = formulario.group({

  titulo: [''],
})

 
  }
  ngOnInit(): void {

   
     this.armarFormulario()
     this.armarTitulo()
    
    
  }

  armarFormulario(){
    
    this.formularioAcerca.setValue({
      id_persona:this.datosPorfolio[0].id_persona,
      nombre: this.datosPorfolio[0].nombre,
      apellido: this.datosPorfolio[0].apellido,
      
      fecha_nac: this.datosPorfolio[0].fecha_nac,
      descripcion: this.datosPorfolio[0].descripcion,
      
    })
    
  }

  armarTitulo(){
    this.formularioTitulo.setValue({
      titulo: this.datosTitulo[0].titulo,
    })
  }

  actualizarDatos(){
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
        this.enviarDatos()
      
        
      } /*else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }*/
    })
  }

  enviarDatos(){
    this.datosDb.updateDato(this.formularioAcerca.value, this.component).subscribe(() => {
      this.activeModal.close();       
  });
  }

  getTitulo(){
    this.datosDb.getDatoId(6, "educaciones").subscribe((data:any) => {    
      this.datosTitulo = data
    });
    
    
  }

  
}
