import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { Usuario } from 'src/app/servicios/interfaces/Usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.css']
})
export class HeaderModalComponent implements OnInit {

  @Input() usuario!:Usuario[]; 

  formulario:FormGroup;
  componente:string = "usuarios"

  constructor(public activeModal: NgbActiveModal, private fb:FormBuilder, private datosDb:DatosPorfolioService) {
    this.formulario = this.fb.group({
      foto_portada: ['']
    })
   }

  ngOnInit(): void {
    this.armarFormulario();
  }

  armarFormulario(){
    this.formulario.setValue({
      foto_portada: this.usuario[0].foto_portada
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
      this.usuario[0].foto_portada = this.formulario.value.foto_portada;
  
      this.datosDb.updateDato(this.usuario[0], this.componente).subscribe(() => {
        this.activeModal.close();     
    });
  }

}
