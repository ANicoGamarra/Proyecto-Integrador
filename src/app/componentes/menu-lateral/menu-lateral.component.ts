import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import {ScrollingModule} from '@angular/cdk/scrolling'; 


@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {

  login:any;
  isLoading$ = this.loginService.isLoading$;
  

  constructor(private loginService: LoginServiceService) {}

  ngOnInit(): void {
    /* this.login = this.loginService.getLogueado()    */
    this.loginService.LogState().subscribe((login) => (this.login = login)); 
    this.loginService.mantenerseLogueado();
     
  }




}
