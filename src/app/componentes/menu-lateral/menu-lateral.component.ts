import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {

  logIn:boolean = false;

  constructor(private loginService: LoginServiceService) {}

  ngOnInit(): void {
    this.logIn = this.loginService.getLogueado()   
    console.log(this.logIn + " se muestra") 
  }
}
