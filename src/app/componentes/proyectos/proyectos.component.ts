import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  login:boolean = false;
  datos:any[] = [];
  constructor(private datosDb:DatosPorfolioService, private loginService:LoginServiceService) { }

  ngOnInit(): void {
    this.datos = this.datosDb.PROYECTOS;
    this.login = this.loginService.getLogueado();
  }
  


}
