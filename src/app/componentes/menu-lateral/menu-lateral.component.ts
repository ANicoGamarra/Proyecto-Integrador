import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {

  login:any;
  
  

  constructor(private loginService: LoginServiceService) {}

  ngOnInit(): void {
    /* this.login = this.loginService.getLogueado()    */
    this.loginService.LogState().subscribe((login) => (this.login = login)); 
     
  }




}
