import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-btn-inicio-sesion',
  templateUrl: './btn-inicio-sesion.component.html',
  styleUrls: ['./btn-inicio-sesion.component.css']
})
export class BtnInicioSesionComponent implements OnInit {

  loginLogout: boolean = false;

  constructor(private router: Router, private loguinLogout : LoginServiceService ) { }

  ngOnInit(): void {
    this.loginLogout = this.loguinLogout.getLogueado()   
    /* console.log(this.loginLogout)  */
  }

  iniciarSesion(){
    this.router.navigate(['logeo']);   
  }

  cerrarSesion(){
    this.loguinLogout.setLogueado();
    this.router.navigate([''])
  }
  
  
}
