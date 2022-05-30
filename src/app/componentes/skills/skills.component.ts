import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import { SkillsModalComponent } from '../modal/skills-modal/skills-modal.component';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  login:any;
  datosPorfolio:any;
  
  componente:string = "skills";
 
  constructor(private datosDb:DatosPorfolioService, private loginService: LoginServiceService, private modalService: NgbModal, private router: Router) { }


  ngOnInit(): void { 
    
    
    this.loginService.LogState().subscribe((login) => (this.login = login));    //comunica con el servicio para saber si esta logueado o no
    
    this.actualizarVistaSkill()                                                 //actualiza la vista del componente
      
    }

    abrirModal(){
      const modalRef = this.modalService.open(SkillsModalComponent,  { windowClass : "myCustomModalClass", centered: true });   //abre el modal y lo centra
      modalRef.componentInstance.datosPorfolio = this.datosPorfolio;                                                            //envia los datos de las skills
      modalRef.result.then((data) => {                                                                                          //cuando se cierra el modal actualiza la vista del componente
       this.ngOnInit();
      }, (reason) => {
       
      })
      
    }

    actualizarVistaSkill(){
   
      this.datosDb.verTodos(this.componente).subscribe((datos) => (
      
        this.datosPorfolio = datos));
    }

  

}
