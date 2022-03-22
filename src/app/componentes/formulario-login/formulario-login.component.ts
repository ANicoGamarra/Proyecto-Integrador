import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {
  hide = true;
  login:any;

  constructor(private router: Router, private loginService: LoginServiceService) {}

  onSubmit(): void {
    this.loginService.LogState().subscribe((login) => (this.login = login))
  }
  volverHome(){
    this.router.navigate([''])
  }

  /* loguearUsuario(){
     console.log(this.loginService.logueado) 
    this.loginService.setLogueado();
    this.router.navigate([''])
     console.log(this.loginService.logueado) 
  } */
  logIn(): void {
    this.loginService.LogIn();
    this.volverHome();
  }

  logOut(): void {
    this.loginService.LogOut();
  }

  logState():void{
    this.loginService.LogState();
  }

  

}
