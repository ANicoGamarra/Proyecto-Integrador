import { Component, OnInit } from '@angular/core';

import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  login:boolean = false;
  datos:any[] = [];

  constructor(private datosDb:DatosPorfolioService, private loginService: LoginServiceService) { }


  ngOnInit(): void { 
    this.datos = this.datosDb.SKILLS;
    this.login = this.loginService.getLogueado();
    }

  
  

}
