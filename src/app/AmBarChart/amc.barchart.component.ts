import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';


@Component({
  selector: 'app-amc-bar-chart',
  template: `<div id="chartdiv" [style.width.%]="100" [style.height.px]="420"></div>`
})
export class AmcBarChartComponent implements AfterViewInit, OnDestroy {
  constructor(private AmCharts: AmChartsService) {}
  private chart: AmChart;
  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart('chartdiv', {
      'type': 'serial',
      'theme': 'light',
      // 'plotAreaFillColors' : ['#af36b1', '#3db19f', '#75ba3b'],
      'dataProvider': [
        {
          'name': 'Germany',
          'value': 8940000,
          'color' : '#af36b1'
        },
        {
          'name': 'USA',
          'value': 5000000,
          'color' : '#3db19f'
        },
        {
          'name': 'France',
          'value': 7200000,
          'color' : '#75ba3b'
        },
      ],
      'graphs': [{
        'balloonText': '<b>[[category]]: [[value]]</b>',
        'fillAlphas': 0.9,
        'lineAlpha': 0.2,
        'type': 'column',
        'valueField': 'value',
        'fillColorsField': 'color',
        // 'width' : 4,
        // 'height' : 4
      }],
      'categoryField': 'name',
       'rotate': false,
      'legend': {
        'enabled': true,
        'align': 'center',
        'data' : [ {
          'title': 'Germany',
          'color' : '#af36b1'
        },
        {
          'title': 'USA',
          'color' : '#3db19f'
        },
        {
          'title': 'France',
          'color' : '#75ba3b'
        }],
    },
    'valueAxes': [{
      'axisAlpha': 0,
      'position': 'left',
      'title': 'Population'
    }],
    'categoryAxis': {
      'gridPosition': 'start',
      // 'labelRotation': 45,
      'title' : 'Country'
    }
    });
  }
  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }

}
