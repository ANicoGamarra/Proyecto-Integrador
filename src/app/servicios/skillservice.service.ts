import { Injectable } from '@angular/core';
import { ChartOptions } from '@rinminase/ng-charts';

@Injectable({
  providedIn: 'root'
})
export class SkillserviceService {

  chartLabels = [""];
  chartData = [0];
  colors = [{
    backgroundColor: [""],
    }];

  chartOptions1: ChartOptions  = {
    cutoutPercentage: 80,
    responsive:true,
    maintainAspectRatio: false
  }

  constructor() { }

  generarChart(habilidad:string, valor:number){
    this.chartLabels[0] = habilidad;
    this.chartData[0] = valor;
    this.chartData[1] = 100 - valor;
  }
}
