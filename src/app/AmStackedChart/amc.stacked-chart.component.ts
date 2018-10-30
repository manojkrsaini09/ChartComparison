import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';


@Component({
  selector: 'app-amc-stacked-chart',
  template: `<div id="chartdiv4" [style.width.%]="100" [style.height.px]="420"></div>`
})
export class AmcStackedChartComponent implements AfterViewInit, OnDestroy {
  constructor(private AmCharts: AmChartsService) {}
  private chart: AmChart;
  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart('chartdiv4', {
      'type': 'serial',
      'theme': 'light',
      'plotAreaFillColors' : ['#af36b1', '#3db19f', '#75ba3b'],
      'legend': {
        'horizontalGap': 10,
        'maxColumns': 1,
        'position': 'right',
        'useGraphSettings': true,
        'markerSize': 10
       },
    'dataProvider': [{
        'country': 'Germany',
        '2010': 40632,
        '2000': 36953,
        '1990': 31476,
    }, {
      'country': 'United States',
      '2010': 49737,
      '2000': 45986,
      '1990': 37060,
    }, {
      'country': 'France',
      '2010': 36745,
      '2000': 34774,
      '1990': 29476,
    }],
    'valueAxes': [{
        'stackType': 'regular',
        'axisAlpha': 0.5,
        'gridAlpha': 0
    }],
    'graphs': [{
        'balloonText': '<b>[[title]]</b><br><span style=\'font-size:14px\'>[[category]]: <b>[[value]]</b></span>',
        'fillAlphas': 0.8,
        'labelText': '[[value]]',
        'lineAlpha': 0.3,
        'title': '2010',
        'type': 'column',
		    'fillColors': ['#af36b1'],
        'valueField': '2010'
    }, {
        'balloonText': '<b>[[title]]</b><br><span style=\'font-size:14px\'>[[category]]: <b>[[value]]</b></span>',
        'fillAlphas': 0.8,
        'labelText': '[[value]]',
        'lineAlpha': 0.3,
        'title': '2000',
        'type': 'column',
		    'fillColors': ['#3db19f'],
        'valueField': '2000'
    }, {
        'balloonText': '<b>[[title]]</b><br><span style=\'font-size:14px\'>[[category]]: <b>[[value]]</b></span>',
        'fillAlphas': 0.8,
        'labelText': '[[value]]',
        'lineAlpha': 0.3,
        'title': '1990',
        'type': 'column',
		    'fillColors': ['#75ba3b'],
        'valueField': '1990'
    }],
    // 'rotate': true,
    'categoryField': 'country',
    'categoryAxis': {
        'gridPosition': 'start',
        'axisAlpha': 0,
        'gridAlpha': 0,
        'position': 'left'
    },
    'export': {
     'enabled': true
     }
    });
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}
