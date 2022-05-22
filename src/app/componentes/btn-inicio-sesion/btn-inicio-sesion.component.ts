import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/servicios/autentificacion.service';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-btn-inicio-sesion',
  templateUrl: './btn-inicio-sesion.component.html',
  styleUrls: ['./btn-inicio-sesion.component.css']
})
export class BtnInicioSesionComponent implements OnInit {

  login: any;

  constructor(private router: Router, private loginService : LoginServiceService, private autentificacionServ: AutentificacionService) { }

  ngOnInit(): void {
    /* this.login = this.loginService.getLogueado()    */
    /* console.log(this.loginLogout)  */
    this.loginService.LogState().subscribe((login) => (this.login = login));    
  }

  iniciarSesion(){
    this.router.navigate(['logeo']);   
  }

  cerrarSesion(){
    this.autentificacionServ.cerrarSesion();
    this.router.navigate(['cerrarSesion']);   
   
  }
  logOut(): void {
    this.loginService.LogOut();
    this.router.navigate(['cerrarSesion']);   
  }
/*
  logState():void{
    this.loginService.LogState();
  }
  */
  
}
