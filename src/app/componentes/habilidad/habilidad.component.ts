import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions } from '@rinminase/ng-charts';


@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {

  @Input() habilidad:string = '';
  @Input() porcentaje:number = 0;
  @Input() color:string = '';


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
        
    /* this.colors[0].backgroundColor = this.color;
    console.log(this.colors); */

    this.chartData[0] = this.porcentaje;
    this.chartData[1] = 100 - this.porcentaje;
    console.log(this.chartData)

    this.chartLabels = [this.habilidad]
    console.log(this.chartLabels);
  }

  


 
}
