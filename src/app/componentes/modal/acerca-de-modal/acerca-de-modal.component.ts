import { Component, Input, OnInit, } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { Persona } from 'src/app/servicios/interfaces/Persona';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-acerca-de-modal',
  templateUrl: './acerca-de-modal.component.html',
  styleUrls: ['./acerca-de-modal.component.css']
})

export class AcercaDeModalComponent implements OnInit {

  formularioAcerca!: FormGroup;
  formularioTitulo!: FormGroup;  
  component: string = "personas";
  datosPorfolio:Persona [] = []; 


  constructor(public activeModal: NgbActiveModal, private formulario: FormBuilder, private datosDb:DatosPorfolioService) { 
  this.formularioAcerca = formulario.group({
    id_persona:[''],
    nombre: [''],
    apellido: [''],
    
    fecha_nac: [''],
    descripcion:[''],
    localidad: [''],    
    })
  }
  ngOnInit(): void {   
     this.armarFormulario()
  }

  armarFormulario(){                                              //setea el valor de los campos del formulario con los datos del objeto
    
    this.formularioAcerca.setValue({
      id_persona:this.datosPorfolio[0].id_persona,
      nombre: this.datosPorfolio[0].nombre,
      apellido: this.datosPorfolio[0].apellido,
      
      fecha_nac: this.datosPorfolio[0].fecha_nac,
      descripcion: this.datosPorfolio[0].descripcion,
      localidad: this.datosPorfolio[0].localidad,
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
        this.editarPersona()
        Swal.fire('¡Guardados!', '', 'success')
        this.activeModal.close();
      
        
      } /*else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }*/
    })
  } 

  editarPersona(){
    this.datosDb.editar(this.formularioAcerca.value, this.component).subscribe(() => {
      
  });
  }

}
