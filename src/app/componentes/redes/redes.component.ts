import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {

  login:any;

  constructor(private loginService: LoginServiceService) { }

  ngOnInit(): void {
    /* this.login = this.loginService.getLogueado() */
    this.loginService.LogState().subscribe((login) => (this.login = login));     
  }


}
