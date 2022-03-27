import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean;

  constructor(private loginService: LoginServiceService) { 
    this.loading = false;
  }

  ngOnInit(): void {
    /* this.loginService.getLogueado */
  }

}
