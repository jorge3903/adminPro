import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {

  @Input() doughnutChartLabels: Label[] = ['campo 1', 'campo 2', 'campo 3'];
  @Input() doughnutChartData: MultiDataSet = [[350, 450, 100]];
  @Input() doughnutChartType: ChartType = 'doughnut';
  @Input() leyenda: string = 'leyenda';


  constructor() { }

  ngOnInit(): void {
  }

}
