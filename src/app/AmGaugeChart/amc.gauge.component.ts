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
      "theme": "light",
  "type": "gauge",
  "addClassNames": true,
  "defs": {
    "filter": {
      "id": "dropshadow",
      "x": "-10%",
      "y": "-10%",
      "width": "120%",
      "height": "120%",
      "feOffset": {
        "result": "offOut",
        "in": "SourceAlpha",
        "dx": "2",
        "dy": "0"
      },
      "feGaussianBlur": {
        "result": "blurOut",
        "in": "offOut",
        "stdDeviation": "5"
      },
      "feColorMatrix": {
            "result": "blurOut",
            "type": "matrix",
            "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0"
        },
      "feBlend": {
        "in": "SourceGraphic",
        "in2": "blurOut",
        "mode": "normal"
      }
    }
  },
  "axes": [{
    "topTextFontSize": 30,
    "topTextYOffset": 70,
    "topText" : 68,         // Chart Value Text
    "axisColor": "#FFFFFF", // Inner Ring Color
    "axisThickness": 0, // Inner Ring Size
    "endValue": 100,    // Chart End Value
    "gridInside": true,
    "inside": true,
    "radius": "80%",
    "tickLength" : 10,
    "minorTickLength" : 5,
    "valueInterval": 25,
    "tickColor": "#000000",
    "minorTickInterval": 5,
    "startAngle": -160,
    "endAngle": 160,
    "unit": "",  // Tick Interval Units
    "bandOutlineAlpha": 0,
    "bands": [{
      //"color": "#0080ff",
      "id": "outerBand",
      "color": "#ffffff",  // Outer Circle Color
      "endValue": 120,     // Outer Circle End Value
      "innerRadius": "105%",
      "radius": "125%",
      "gradientRatio": [0.0, 0, -0.0],
      "startValue": 0
    }, 
    {
      "color": "#8D288F",   // Inner Circle Color
      "endValue": 68,       // Chart Value Inner Band
      "innerRadius": "111%",
      "radius": "119%",
      "gradientRatio": [0.5, 0, -0.5],
      "startValue": 0
    }]
  }],
  "arrows": [{
    "alpha": 0,       // Arrow Opacity
    "borderAlpha": 0, // Arrow Border Opacity
    "innerRadius": "35%",
    "nailRadius": 0,
    "radius": "110%",
    "value": 68     // Chart Value Angle Arrow
  }]
});
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}
