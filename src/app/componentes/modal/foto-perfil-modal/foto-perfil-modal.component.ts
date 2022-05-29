import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { Usuario } from 'src/app/servicios/interfaces/Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-foto-perfil-modal',
  templateUrl: './foto-perfil-modal.component.html',
  styleUrls: ['./foto-perfil-modal.component.css']
})
export class FotoPerfilModalComponent implements OnInit {

  @Input() usuario!:Usuario[]; 

  formulario:FormGroup;
  componente:string = "usuarios"


  constructor(public activeModal: NgbActiveModal, private fb:FormBuilder, private datosDb:DatosPorfolioService) { 
    this.formulario = this.fb.group({
      foto_perfil: ['']
    })
  }

  ngOnInit(): void {
    this.armarFormulario();
  }

  armarFormulario(){
    this.formulario.setValue({
      foto_perfil: this.usuario[0].foto_perfil
    })
  }

  guardarDatos(){
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
    this.usuario[0].foto_perfil = this.formulario.value.foto_perfil;

    this.datosDb.editar(this.usuario[0], this.componente).subscribe(() => {
      this.activeModal.close();     
  });
}
}
