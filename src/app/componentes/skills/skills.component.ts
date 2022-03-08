import { Component, OnInit } from '@angular/core';
import { ChartOptions } from '@rinminase/ng-charts';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidad: string ="Dormir";
  porcentaje:number = 20;
  color:string = "red" 

  habilidad2: string ="tomar mate";
  porcentaje2:number = 95;

  constructor() { }

  ngOnInit(): void {
  }

  /* chartData = {
    datasets: [{
        data: [90, 80, 85, 95, 20, 30],
        backgroundColor: [ 'red', 'green', 'blue', 'yellow', 'violet', 'orange'
        ]
    }],
    labels: ['Practicar', 'Comer', 'Leer', 'Tomar mate', 'Dormir', 'Hacer ejercicio']
};
 */

/* 

  chartLabels1 = ['Liderazgo'];
  chartData1 = [
    [90,10],
  ];
  colors1 = [{
    backgroundColor: ["red"],
    
}];
  chartOptions1: ChartOptions  = {
    cutoutPercentage: 80,
    responsive:true,
    maintainAspectRatio: false
    
  };
  chartLabels2 = ['Trabajo en equipo'];
  chartData2 = [
    [80,20],
  ];
  colors2 = [{
    backgroundColor: ["red"],
    fontColor: 'red'
    
}];
  chartOptions2: ChartOptions  = {
    cutoutPercentage: 80,
    responsive:true,
    maintainAspectRatio: false
    
    
  };

 */
/* 
  Chart:any = Chart.pluginService.register({
    beforeDraw: function (Chart: any) {
      var width = Chart.chart.width, height = Chart.chart.height, ctx = Chart.chart.ctx;

      ctx.restore();
      var fontSize = (height / 60).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";

      

      var text = "75%", textX = Math.round((width - ctx.measureText(text).width) / 2), textY = height / 1.7;

      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  }); */

  Chart:any = Chart.pluginService.register({
    beforeDraw: function (Chart: any) {
      const width = Chart.chart.width;
      const height = Chart.chart.height;
      const ctx = Chart.chart.ctx;
      ctx.restore();
      const fontSize = (height / 60).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = 'middle';
      var total = Chart.data.datasets[0].data.reduce(function(previousValue: any, currentValue: any, currentIndex: any, array: any) {
              return previousValue ;
      });
      const text = total + '%'
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 1.68;
      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  });
  
  

}
