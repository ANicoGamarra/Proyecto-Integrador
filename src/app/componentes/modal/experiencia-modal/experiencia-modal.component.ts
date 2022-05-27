import { Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Experiencia } from 'src/app/servicios/interfaces/Experiencia';
import { ModalServiceService } from 'src/app/servicios/modal-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia-modal',
  templateUrl: './experiencia-modal.component.html',
  styleUrls: ['./experiencia-modal.component.css']
})
export class ExperienciaModalComponent implements OnInit {
  
  @Input()  expNueva:boolean;
  @Input()  id!:number;
  
  

  componente:string = "experiencias"
  xp!:Experiencia;
  formularioExperiencia!: FormGroup;
  

  constructor(public activeModal: NgbActiveModal, private datosDb:DatosPorfolioService, private formulario: FormBuilder)  { 
    this.expNueva = false;
    this.formularioExperiencia = formulario.group({
      id_experiencia:[''],
      empresa: [''],
      puesto: [''],
      fecha_ingreso: [''],
      fecha_egreso: [''],
      descripcion:[''],
      logo_empresa:['']
   })
   
        
}

  ngOnInit(): void {
   
    if(this.expNueva === false){
      this.getExperienciaId();
    }
    
  }

  getExperienciaId(): void {
    this.datosDb.getDatoId(this.id, this.componente).subscribe(xp => {
      this.xp = xp
     
      this.editForm(xp);
    });
  }

  editForm(xp:any){
      this.formularioExperiencia.setValue( {
        id_experiencia:this.id,
        empresa:xp.empresa ,
        puesto:xp.puesto, 
        fecha_ingreso:xp.fecha_ingreso,
        fecha_egreso:xp.fecha_egreso,
        descripcion:xp.descripcion,
        logo_empresa:xp.logo_empresa,
    });
  }
  
  enviarDatos(){
      
    if(this.expNueva === true){
      this.xp = this.formularioExperiencia.value
    
      this.agregarExperiencia()
    }else{
      this.armarModeloExperiencia()
      this.editarExperiencia()
    }

    
  }

  armarModeloExperiencia(){
    
    this.xp.empresa = this.formularioExperiencia.value.empresa ,
    this.xp.puesto = this.formularioExperiencia.value.puesto, 
    this.xp.fecha_ingreso = this.formularioExperiencia.value.fecha_ingreso,
    this.xp.fecha_egreso = this.formularioExperiencia.value.fecha_egreso,
    this.xp.descripcion = this.formularioExperiencia.value.descripcion,
    this.xp.logo_empresa = this.formularioExperiencia.value.logo_empresa

    
  }

  actualizarExperiencia(){
    this.datosDb.updateDato(this.xp, this.componente).subscribe(() => {
      this.activeModal.close();     
  });
  }

  enviarExperiencia(){
    this.expNueva = false;
    this.xp.id_persona = 1;
    
      this.datosDb.addDato(this.xp, this.componente)
        .subscribe(xp => {
          this.activeModal.close(); 
        });
    
  }

  editarExperiencia() {
  
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
        this.actualizarExperiencia()
      
        
      } /*else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }*/
    })
    
  }

  
  agregarExperiencia() {
  Swal.fire({
    title: '¿Desea agregar la experiencia?',
    //showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Agregar',
    //denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('¡Agregado!', '', 'success');
      this.enviarExperiencia();
    } 
  })
}
  

}
