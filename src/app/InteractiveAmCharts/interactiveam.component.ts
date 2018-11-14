import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';


@Component({
  selector: 'interactive-am-chart',
  templateUrl: './interactiveam.component.html'
})
export class InteractiveAmChartsComponent implements AfterViewInit, OnDestroy {
  constructor(private AmCharts: AmChartsService) {}
  private chart: AmChart;
  chartType = "column";
  chartTitle="Basic Drilldown";
  chartData:Array<object>=[
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
    },
  ];
  ngAfterViewInit() {
    this.createChart(this.chartType);
  }

  updateTitle() {
    this.createChart(this.chartType);
  }

  updateType() {
    this.createChart(this.chartType);
  }

  createChart(type:string){
      if(type == "column"){
        this.chart = this.AmCharts.makeChart('chartdiv', {
            'type': 'serial',
            'theme': 'light',
            "titles": [{
                "text": this.chartTitle
              }],
            'dataProvider': this.chartData,
            'graphs': [{
              'balloonText': '<b>[[category]]: [[value]]</b>',
              'fillAlphas': 0.9,
              'lineAlpha': 0.2,
              'type': 'column',
              'valueField': 'value'
            }],
            'categoryField': 'name',
             'rotate': false,
          'valueAxis': [{
            'axisAlpha': 0,
            'position': 'left',
            'title': 'Population'
          }],
          'categoryAxis': {
            'gridPosition': 'start',
            'title' : 'Country'
          }
        });
      }
      else if(type == "pie"){
        this.chart = this.AmCharts.makeChart( "chartdiv", {
            "type": "pie",
            "theme": "light",
            "titles": [{
                "text": this.chartTitle
              }],
            "dataProvider": this.chartData,
            "valueField": "value",
            "titleField": "name",
             "balloon":{
             "fixedPosition":true
            },
            "export": {
              "enabled": true
            }
          } );
      }
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }

}
