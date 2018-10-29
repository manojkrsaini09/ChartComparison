import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-ngx-bar-chart',
  templateUrl: './ngx.barchart.component.html'
})
export class NgxBarChartComponent {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#af36b1', '#3db19f', '#75ba3b', '#AAAAAA']
  };

  constructor() {
      this.single = [
        {
          'name': 'Germany',
          'value': 8940000
        },
        {
          'name': 'USA',
          'value': 5000000
        },
        {
          'name': 'France',
          'value': 7200000
        }
      ];
  }

  onSelect(event) {
    console.log(event);
  }
}
