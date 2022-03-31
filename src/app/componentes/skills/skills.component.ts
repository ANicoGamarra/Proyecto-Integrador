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
  datos:any[] = [];
 
  constructor(private datosDb:DatosPorfolioService, private loginService: LoginServiceService, private modalService: NgbModal ) { }


  ngOnInit(): void { 
    this.datos = this.datosDb.SKILLS;
    /* this.login = this.loginService.getLogueado(); */
    this.loginService.LogState().subscribe((login) => (this.login = login));
    }

    abrirModal(){
      const modalRef = this.modalService.open(SkillsModalComponent,  { centered: true });   
      modalRef.componentInstance.datos = this.datos;    
      
    }

  

}
