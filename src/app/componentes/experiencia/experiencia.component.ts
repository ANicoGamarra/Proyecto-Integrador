import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  login:any;

  datos:any[] = []; 
  constructor(private datosDb:DatosPorfolioService, private loginService: LoginServiceService ) { }

  ngOnInit(): void {
   this.datos = this.datosDb.EXPERIENCIA
   /* this.login = this.loginServices.getLogueado() */
   this.loginService.LogState().subscribe((login) => (this.login = login));    
  }

}
