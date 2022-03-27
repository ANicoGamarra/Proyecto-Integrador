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
  usuario:string = "";
  password:string = "";

  loading:boolean =false;

  constructor(private router: Router, private loginService: LoginServiceService) {

  }

  onSubmit(): void {
    this.loginService.LogState().subscribe((login) => (this.login = login))


  }
  volverHome(){
    this.router.navigate([''])
  }
/* 
  loguearUsuario(){
     console.log(this.loginService.logueado) 
    this.loginService.setLogueado();
    this.router.navigate([''])
     console.log(this.loginService.logueado) 
  } */

  logIn(): void {
    this.loginService.LogIn();
    this.volverHome();
    /* console.log(this.usuario);
    console.log(this.password); */
  }

  logOut(): void {
    this.loginService.LogOut();
  }

  logState():void{
    this.loginService.LogState();
  }

  
//login walter

  logInWalter() {
    this.loading = true;
    const user = {email: this.usuario, password: this.password};
    this.loginService.login(user).subscribe( data => {
      /* console.log(data); */
      this.loginService.setToken(data.token);
      if(data.token !== null){
        this.logIn();
      }
     this.loading= false; 
    });
    
    
  }


}
