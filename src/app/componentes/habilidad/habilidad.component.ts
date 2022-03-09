import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions } from '@rinminase/ng-charts';


@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
/* 
  @Input() habilidad:string = '';
  @Input() porcentaje:number = 0;
  @Input() color:string = ''; */
  @Input() habilidad:{} = {};

  habilidades:any = [];
  constructor() { 

    
   }

    
  chartLabels = [""];
  chartData = [0];
  /* colors = [
    {backgroundColor: "" }    
  ]; */

  chartOptions: ChartOptions  = {
    cutoutPercentage: 80,
    responsive:true,
    maintainAspectRatio: false
    
  };

  ngOnInit(): void { 

    /* console.log(this.habilidad) */
    this.habilidades.push(this.habilidad);
    console.log(this.habilidades)
    for (let i = 0; i < this.habilidades.length; i++) {
      
      this.chartData[i] = this.habilidades[i].valor;
      this.chartData[i+1]  = 100 - this.habilidades[i].valor
      this.chartLabels[i] =  this.habilidades[i].habilidad
      /* console.log(this.chartData) */
      console.log(this.chartLabels)
    }
   
  }

  


 
}
