import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';


@Component({
  selector: 'app-amc-horizontal-bar-chart',
  template: `<div id="chartdiv2" [style.width.%]="100" [style.height.px]="420"></div>`
})
export class AmcHorizontalBarChartComponent implements AfterViewInit, OnDestroy {
  constructor(private AmCharts: AmChartsService) {}
  private chart: AmChart;
  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart('chartdiv2', {
      'type': 'serial',
      'theme': 'light',
      'plotAreaFillColors' : ['#af36b1', '#3db19f', '#75ba3b'],
      'dataProvider': [
        {
          'name': 'Order Information',
          'value': 16.8,
          'color' : '#af36b1'
        },
        {
          'name': 'Predicted Outcome',
          'value': 17.5,
          'color' : '#3db19f'
        },
        {
          'name': 'Basecase Outcome',
          'value': 14.8,
          'color' : '#75ba3b'
        }
      ],
      'graphs': [{
        'balloonText': '<b>[[category]]: [[value]]</b>',
        'fillAlphas': 0.9,
        'lineAlpha': 0.2,
        'type': 'column',
        'valueField': 'value',
        'fillColorsField': 'color',
        'width' : 4,
        'height' : 4
      }],
      'categoryField': 'name',
      'rotate': true,
      'legend': {
        'enabled': true,
        'align': 'center',
        'data' : [ {
          'title': 'Order Information',
          'color' : '#af36b1'
        },
        {
          'title': 'Predicted Outcome',
          'color' : '#3db19f'
        },
        {
          'title': 'Basecase Outcome',
          'color' : '#75ba3b'
        }],
    },
    'valueAxes': [{
      'axisAlpha': 0,
      'position': 'left',
      'title': 'Time'
    }],
    'categoryAxis': {
      'gridPosition': 'start',
      // 'labelRotation': 45,
      'title' : 'Order Information'
    }
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}
