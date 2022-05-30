import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  isLoading$ = this.loginService.isLoading$;

  constructor(private loginService: LoginServiceService) { }

  ngOnInit(): void {
  }

}
