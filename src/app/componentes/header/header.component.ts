import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /* login:boolean = false; */
  login:any
  
  constructor(private loginService: LoginServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    /* this.login = this.loginService.getLogueado() */
    this.loginService.LogState().subscribe((login) => (this.login = login))
  }

  abrirModal(){

  }
}
