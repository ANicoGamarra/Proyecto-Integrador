import { Component, OnInit } from '@angular/core';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';

@Component({
  selector: 'app-ap-logo',
  templateUrl: './ap-logo.component.html',
  styleUrls: ['./ap-logo.component.css']
})
export class ApLogoComponent implements OnInit {

  constructor(private datosDb:DatosPorfolioService) { }

  ngOnInit(): void {
    
  }

}
