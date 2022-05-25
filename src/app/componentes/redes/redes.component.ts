import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';
import { RedesSociales } from 'src/app/servicios/interfaces/RedesSociales';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {

  login:any;
  datosPorfolio!: RedesSociales [];
  componente:string = "redesSociales";

  constructor(private loginService: LoginServiceService, private datosDb:DatosPorfolioService) { }

  ngOnInit(): void {
    /* this.login = this.loginService.getLogueado() */
    this.loginService.LogState().subscribe((login) => (this.login = login));     
    
    this.datos()
  }

  datos(){
    this.datosDb.getDatos(this.componente).subscribe((datos) => {
      console.log(datos)  
      this.datosPorfolio = datos});
    
  }


}
