import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-btn-inicio-sesion',
  templateUrl: './btn-inicio-sesion.component.html',
  styleUrls: ['./btn-inicio-sesion.component.css']
})
export class BtnInicioSesionComponent implements OnInit {

  login: boolean = false;

  constructor(private router: Router, private loginService : LoginServiceService ) { }

  ngOnInit(): void {
    this.login = this.loginService.getLogueado()   
    /* console.log(this.loginLogout)  */
  }

  iniciarSesion(){
    this.router.navigate(['logeo']);   
  }

  cerrarSesion(){
    
    this.loginService.setLogueado();
    this.login = this.loginService.getLogueado()
    this.router.navigate([''])
    console.log(this.login)
  }
  
  
}
