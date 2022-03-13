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


  constructor(private router: Router, private loginService: LoginServiceService) {}

  onSubmit(): void {
    
  }
  volverHome(){
    this.router.navigate([''])
  }

  loguearUsuario(){
   /*  console.log(this.loginService.logueado) */
    this.loginService.setLogueado();
    this.router.navigate([''])
    /* console.log(this.loginService.logueado) */
  }

}
