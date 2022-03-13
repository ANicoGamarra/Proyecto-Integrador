import { Component, OnInit } from '@angular/core';
import { ChartOptions } from '@rinminase/ng-charts';
import * as Chart from 'chart.js';
import { DatosPorfolioService } from 'src/app/servicios/datos-porfolio.service';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private datosDb:DatosPorfolioService) { }

  /* chartLabels:any[] = [];
  chartData:any[] = [];
  chartColors:any[] = [] */

  ngOnInit(): void { 
   /*  this.chartLabels = this.datosDb.SKILLS[0];
    this.chartData = this.datosDb.SKILLS[1];
    this.chartColors = this.datosDb.SKILLS[2];
    console.log(this.chartLabels) */
    }


  chartLabels = [['Dormir'],['Comer'],['Leer'],['Estudiar'],['Practicar'],['Tomar Mate'],['Mirar series'],['Entrenar']];
  chartData = [[20,80],[90,10],[70,30],[75,25],[90,10],[95,5],[30,70], [25,75]  ];
  chartColors = [
    [{backgroundColor:["orange"],borderColor:["black","black"]}], 
    [{backgroundColor:["red"],borderColor:["black","black"] }], 
    [{backgroundColor:["blue"],borderColor:["black","black"] }],
    [{backgroundColor:["green"],borderColor:["black","black"] }],
    [{backgroundColor:["yellow"],borderColor:["black","black"] }],
    [{backgroundColor:["purple"],borderColor:["black","black"] }], 
    [{backgroundColor:["violet"],borderColor:["black","black"] }],
    [{backgroundColor:["lightblue"],borderColor:["black","black"] }]    
  ]
    

  chartOptions: ChartOptions  = {
    cutoutPercentage: 80,
    responsive:true,
    maintainAspectRatio: false,
    legend: {
      position: 'top',
      labels: {
        fontColor: 'white',
        fontSize: 18
      }      
    }
    
 } 
       

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
    const textY = height / 1.6;
    ctx.fillText(text, textX, textY);
    ctx.save();
  }
});
  
  
  

}
