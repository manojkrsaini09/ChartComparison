import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';


@Component({
  selector: 'app-amc-gauge-chart',
  template: `<div id="chartdiv3" [style.width.%]="100" [style.height.px]="420"></div>`
})
export class AmcGaugeChartComponent implements AfterViewInit, OnDestroy {
  constructor(private AmCharts: AmChartsService) {}
  private chart: AmChart;
  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart('chartdiv3', {
      'type': 'gauge',
  'theme': 'light',
  'startDuration': 0.3,
  'marginTop': 20,
  'marginBottom': 50,
  'axes': [{
    'axisAlpha': 0.3,
    'endAngle': 360,
    'endValue': 12,
    'minorTickInterval': 0.2,
    'showFirstLabel': false,
    'startAngle': 0,
    'axisThickness': 1,
    'valueInterval': 1
  }],
  'arrows': [{
    'radius': '50%',
    'title': 'First arrow',
    'color': '#00CC00',
    'innerRadius': 0,
    'clockWiseOnly': true,
    'nailRadius': 10,
    'nailAlpha': 1
  }, {
    'title': 'Second arrow',
    'color': '#0000CC',
    'nailRadius': 0,
    'radius': '80%',
    'startWidth': 6,
    'innerRadius': 0,
    'clockWiseOnly': true,
    'value': 8
  }, {
    'title': 'Third arrow',
    'color': '#CC0000',
    'nailRadius': 4,
    'startWidth': 3,
    'innerRadius': 0,
    'clockWiseOnly': true,
    'nailAlpha': 1,
    'value': 4
  }],
  'legend': {
    'align': 'center'
  }
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}
