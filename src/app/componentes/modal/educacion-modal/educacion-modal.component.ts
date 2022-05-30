import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { Educacion } from 'src/app/servicios/interfaces/Educacion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',
  styleUrls: ['./educacion-modal.component.css']
})
export class EducacionModalComponent implements OnInit {

  @Input()  eduNueva!:boolean;
  @Input()  id!:number;

  componente:string = "educaciones"
  edu!:Educacion;
  formularioEducacion: FormGroup;

  constructor(public activeModal: NgbActiveModal,  private datosDb:DatosPorfolioService, private formulario: FormBuilder) { 
    this.eduNueva = false;
    this.formularioEducacion = formulario.group({
      id_educacion: [''],
      titulo: [''],
      institucion: [''],
      fecha_egresado: [''],
      descripcion: [''],
      certificado: [''],
      logo_educacion: [''],
      enlace_educacion: [''],
      
   })

  }

  ngOnInit(): void {
   
    if(this.eduNueva === false){                          //si la educacion no es nueva, deriva al metodo para solicitar los datos
      this.getEducacionId();
    }
  }

  getEducacionId(): void {
    this.datosDb.buscarId(this.id, this.componente).subscribe(edu => {
      this.edu = edu     
      this.editForm(edu);
    });
  }

  editForm(edu:any){                                      //metodo para llenar el formulario con los datos de la educacion
    this.formularioEducacion.setValue( {
      id_educacion: this.id,
      titulo:edu.titulo ,
      institucion:edu.institucion, 
      fecha_egresado:edu.fecha_egresado,
      descripcion:edu.descripcion,
      certificado:edu.certificado,
      logo_educacion:edu.logo_educacion,
      enlace_educacion:edu.enlace_educacion,
    });
  }

  enviarDatos(){
    if(this.eduNueva === true){                           //si la educacion es nueva, carga los datos del formulario en la variable y llama al metodo del servico para crear
      this.edu = this.formularioEducacion.value      
      this.agregarEducacion()
    }else{                                                // si no es nueva, deriva al metido para armar la educacion con los nuevo datos 
      this.armarModeloEducacion()
      this.editarEducacion()
    }
  }

  armarModeloEducacion(){
    
    this.edu.institucion = this.formularioEducacion.value.institucion ,
    this.edu.titulo = this.formularioEducacion.value.titulo,     
    this.edu.fecha_egresado = this.formularioEducacion.value.fecha_egresado,
    this.edu.descripcion = this.formularioEducacion.value.descripcion,
    this.edu.certificado = this.formularioEducacion.value.certificado,
    this.edu.logo_educacion = this.formularioEducacion.value.logo_educacion,
    this.edu.enlace_educacion = this.formularioEducacion.value.enlace_educacion

  }

  actualizarEducacion(){
  
    this.datosDb.editar(this.edu, this.componente).subscribe(() => {
      this.activeModal.close();     
  });
  }

  enviarEducacion(){
    this.eduNueva = false;
    this.edu.id_persona = 1;
    
    
      this.datosDb.agregar(this.edu, this.componente)
        .subscribe(edu => {
          this.activeModal.close(); 
        });     
  }

  editarEducacion() {
  
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
        this.actualizarEducacion()
      
        
      } /*else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }*/
    })
    
  }

  
  agregarEducacion() {
  Swal.fire({
    title: '¿Desea agregar el Titulo?',
    //showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Agregar',
    //denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('¡Agregado!', '', 'success');
      this.enviarEducacion();
    } 
  })
}
  

}
