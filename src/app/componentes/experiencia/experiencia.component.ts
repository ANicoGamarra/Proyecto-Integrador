import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  login:boolean = false;

  datos:any[] = []; 
  constructor(private datosDb:DatosPorfolioService, private loginServices: LoginServiceService ) { }

  ngOnInit(): void {
   this.datos = this.datosDb.EXPERIENCIA
   this.login = this.loginServices.getLogueado()
  }

}
