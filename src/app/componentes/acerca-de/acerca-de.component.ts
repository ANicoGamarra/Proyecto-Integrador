import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';




@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  login:boolean = false;

  
  constructor(private loginService : LoginServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.login = this.loginService.getLogueado()
  }

  abrirModal(){
    
  }
  

}
