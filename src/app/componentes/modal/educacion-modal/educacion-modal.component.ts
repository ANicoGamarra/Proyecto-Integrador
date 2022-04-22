import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { Educacion } from 'src/app/servicios/interfaces/Educacion';

@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',
  styleUrls: ['./educacion-modal.component.css']
})
export class EducacionModalComponent implements OnInit {

  @Input()  eduNueva!:boolean;
  @Input()  id!:number;

  componente:string = "experiencias"
  edu!:Educacion;
  formularioEducacion: FormGroup;

  constructor(public activeModal: NgbActiveModal,  private datosDb:DatosPorfolioService, private formulario: FormBuilder) { 
    this.eduNueva = false;
    this.formularioEducacion = formulario.group({
      id_educacion: [''],
      titulo: [''],
      institucion: [''],
      fecha_egresado: [''],
      certificado: [''],
      logo_educacion: [''],
      
   })

  }

  ngOnInit(): void {

    if(this.eduNueva === false){
      this.getEducacionId();
    }
  }

  getEducacionId(): void {
    this.datosDb.getDatoId(this.id, this.componente).subscribe(edu => {
      this.edu = edu
      //console.log(this.xp)
      this.editForm(edu);
    });
  }

  editForm(edu:any){
    this.formularioEducacion.setValue( {
      id_educacion: this.id,
      titulo:edu.titulo ,
      institucion:edu.institucion, 
      fecha_egresado:edu.fecha_egresado,
      certificado:edu.certificado,
      logo_educacion:edu.logo_educacion,
    });
  }

  enviarDatos(){
   
    console.log(this.eduNueva)
    
    if(this.eduNueva === true){
      this.edu = this.formularioEducacion.value
      //console.log(this.xp)
      //console.log("si es nueva deberia salir esto")
      this.agregarExperiencia()
    }else{
      this.armarModeloEducacion()
      this.actualizarEducacion()
    }
  }

  armarModeloEducacion(){
    
    this.edu.institucion = this.formularioEducacion.value.institucion ,
    this.edu.titulo = this.formularioEducacion.value.titulo, 
    
    this.edu.fecha_egresado = this.formularioEducacion.value.fecha_egresado,
    this.edu.certificado = this.formularioEducacion.value.certificado,
    this.edu.logo_educacion = this.formularioEducacion.value.logo_educacion

  }

  actualizarEducacion(){
    this.datosDb.updateDato(this.edu, this.componente).subscribe(() => {
      this.activeModal.close();     
  });
  }

  agregarExperiencia(){
    this.eduNueva = false;
    this.edu.id_persona = 1;
    
      this.datosDb.addDato(this.edu, this.componente)
        .subscribe(edu => {
          this.activeModal.close(); 
        });
      //console.log(this.edu)
  }

}
