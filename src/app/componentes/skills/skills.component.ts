import { Component, OnInit } from '@angular/core';
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
  //nuevo:boolean = true
  componente:string = "skills";
 
  constructor(private datosDb:DatosPorfolioService, private loginService: LoginServiceService, private modalService: NgbModal ) { }


  ngOnInit(): void { 
    
    
    this.loginService.LogState().subscribe((login) => (this.login = login));    
    
    this.actualizarVistaSkill()
      
    }

    abrirModal(){
      const modalRef = this.modalService.open(SkillsModalComponent,  { windowClass : "myCustomModalClass", centered: true });   
      modalRef.componentInstance.datosPorfolio = this.datosPorfolio;
      modalRef.result.then((data) => {
        this.actualizarVistaSkill();
      }, (reason) => {
        alert("no funciono")
      })
      
    }

    actualizarVistaSkill(){
   
      this.datosDb.getDatos(this.componente).subscribe((datos) => (
        //console.log(datos),  
        this.datosPorfolio = datos));
    }

  

}
