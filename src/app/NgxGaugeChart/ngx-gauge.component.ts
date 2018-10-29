import {Component} from '@angular/core';

@Component({
  selector: 'app-ngx-gauge',
  template: `
    <ngx-charts-gauge
      [view]="view"
      [scheme]="colorScheme"
      [results]="data"
      [min]="0"
      [max]="100"
      [angleSpan]="240"
      [startAngle]="-120"
      [units]="'alerts'"
      [bigSegments]="10"
      [smallSegments]="5"
      (select)="onSelect($event)">
    </ngx-charts-gauge>
  `
})
export class NgxGaugeComponent {
  view: any[] = [700, 400];
  data: any[];

  constructor() {
    this.data = [{
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
      }];
  }

  colorScheme = {
    domain: ['#af36b1', '#3db19f', '#75ba3b']
  };

  onSelect(event) {
    console.log(event);
  }
}
