import { Component, Input, OnInit } from '@angular/core';
import { BarChart } from 'chartist';
import * as payModels from '../../models';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  @Input() set _data(output: payModels.output) {
    new BarChart(
      '#chart',
      {
        labels: ['Regular payments'],
        series: [[output.principal], [output.interest]],
      },
      {
        stackBars: true,
        axisY: {
          labelInterpolationFnc: (value) => `$${value}`,
        },
      }
    ).on('draw', (data) => {
      if (data.type === 'bar') {
        data.element.attr({
          style: 'stroke-width: 60px',
        });
      }
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
