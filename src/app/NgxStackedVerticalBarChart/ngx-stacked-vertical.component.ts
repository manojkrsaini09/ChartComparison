import {Component} from '@angular/core';

@Component({
  selector: 'app-ngx-stacked-vertical',
  template: `
  <ngx-charts-bar-vertical-stacked
  [view]="view"
  [scheme]="colorScheme"
  [results]="data"
  [gradient]="gradient"
  [xAxis]="showXAxis"
  [yAxis]="showYAxis"
  [legend]="showLegend"
  [showXAxisLabel]="showXAxisLabel"
  [showYAxisLabel]="showYAxisLabel"
  [xAxisLabel]="xAxisLabel"
  [yAxisLabel]="yAxisLabel"
  (select)="onSelect($event)">
</ngx-charts-bar-vertical-stacked>
  `
})
export class NgxStackedVerticalChartComponent {
  view: any[] = [700, 400];
  data: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'GDP Per Capita';
  constructor() {
    this.data = [
      {
        'name': 'Germany',
        'series': [
          {
            'name': '2010',
            'value': 40632
          },
          {
            'name': '2000',
            'value': 36953
          },
          {
            'name': '1990',
            'value': 31476
          }
        ]
      },
      {
        'name': 'United States',
        'series': [
          {
            'name': '2010',
            'value': 49737
          },
          {
            'name': '2000',
            'value': 45986
          },
          {
            'name': '1990',
            'value': 37060
          }
        ]
      },
      {
        'name': 'France',
        'series': [
          {
            'name': '2010',
            'value': 36745
          },
          {
            'name': '2000',
            'value': 34774
          },
          {
            'name': '1990',
            'value': 29476
          }
        ]
      },
      {
        'name': 'United Kingdom',
        'series': [
          {
            'name': '2010',
            'value': 36240
          },
          {
            'name': '2000',
            'value': 32543
          },
          {
            'name': '1990',
            'value': 26424
          }
        ]
      }
    ];
  }

  colorScheme = {
    domain: ['#af36b1', '#3db19f', '#75ba3b']
  };

  onSelect(event) {
    console.log(event);
  }
}
