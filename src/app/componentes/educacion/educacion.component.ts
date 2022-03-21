import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  login:boolean = false;
  datos:any[] = [];
  constructor(private datosDb:DatosPorfolioService, private loginService: LoginServiceService) { }

  ngOnInit(): void {
    this.datos = this.datosDb.EDUCACION;
    this.login = this.loginService.getLogueado();
  }

}
