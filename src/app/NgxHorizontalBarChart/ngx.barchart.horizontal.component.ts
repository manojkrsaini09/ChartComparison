import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-ngx-horizontal-bar-chart',
  templateUrl: './ngx.barchart.horizontal.component.html'
})
export class NgxHorizontalBarChartComponent {
  chartData: any[];
  view: any[] = [700, 400];

  // options
  showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Time';
    showYAxisLabel = true;
    yAxisLabel = 'Order Time';
    showDataLabel = true;

    colorScheme = {
        domain: ['#af36b1', '#3db19f', '#75ba3b']
    };


  constructor() {
    this.chartData = [
        {
          'name': 'Order Information',
          'value': 16.8
        },
        {
          'name': 'Predicted Outcome',
          'value': 17.5
        },
        {
          'name': 'Basecase Outcome',
          'value': 14.8
        }
      ];
  }

  onSelect(event) {
    console.log(event);
  }
}
