import { BreakpointObserver } from '@angular/cdk/layout';
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
  pantallasPequenias:boolean = false;

  constructor(private loginService: LoginServiceService, private datosDb:DatosPorfolioService, private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    /* this.login = this.loginService.getLogueado() */
    this.loginService.LogState().subscribe((login) => (this.login = login));     
    
    this.datos()
  }

  datos(){
    this.datosDb.verTodos(this.componente).subscribe((datos) => {
    
      this.datosPorfolio = datos});
    
  }
  vistaResponsiva(){
  this.responsive.observe('(max-width: 768px)')
      .subscribe(result => {

        this.pantallasPequenias = false; 

        if (result.matches) {
          this.pantallasPequenias = true;
        }

  });
  }
}
