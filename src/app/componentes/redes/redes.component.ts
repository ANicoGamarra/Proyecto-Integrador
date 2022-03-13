import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {

  log:boolean = false;

  constructor(private logIn: LoginServiceService) { }

  ngOnInit(): void {
    this.log = this.logIn.getLogueado()
  }


}
