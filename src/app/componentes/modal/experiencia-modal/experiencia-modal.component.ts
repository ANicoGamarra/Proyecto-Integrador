import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-experiencia-modal',
  templateUrl: './experiencia-modal.component.html',
  styleUrls: ['./experiencia-modal.component.css']
})
export class ExperienciaModalComponent implements OnInit {

  @Input() datos:any;
  @Input() id!:number;

  indice:any;

  formularioExperiencia: FormGroup;

  constructor(public activeModal: NgbActiveModal, private datosDb:DatosPorfolioService, formulario: FormBuilder)  { 
   
    this.datosDb.getExperienciaById(this.id).subscribe(
      (data)=>{
        console.log(data);
        this.formularioExperiencia.setValue({
          empresa:data.empresa ,
          puesto:data.puesto, 
          fecha_ingreso:data.fecha_ingreso,
          fecha_egreso:data.fecha_egreso,
          descripcion:data.descripcion,
          logo_empresa:data.logo_empresa,
        })
      }
    )

    this.formularioExperiencia = formulario.group({
      empresa:[""],
      puesto:[""],
      fecha_ingreso:[""],
      fecha_egreso:[""],
      descripcion:[""],
      logo_empresa:[""],
    });
  
}

  ngOnInit(): void {
    console.log(this.id)
  }

  enviarDatos(){

  }

}
