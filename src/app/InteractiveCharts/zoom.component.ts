import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, OnInit, ViewChild, ElementRef, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import * as  Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);


@Component({
  selector: 'zoom-high-comp',
  templateUrl: './zoom.component.html',

})
export class ZoomHighChartComponent implements OnInit {
  name = `Angular! v${VERSION.full}`;
  @ViewChild("container", { read: ElementRef }) container: ElementRef;

  constructor() {
  }
  ngOnInit() {
    Highcharts.chart('container', {
      chart: {
          type: 'line',
          zoomType: 'x',
          panning: true,
          panKey: 'shift'
      },
  
      title: {
          text: 'Zooming and panning'
      },
  
      subtitle: {
          text: 'Click and drag to zoom in. Hold down shift key to pan.'
      },
  
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
  
      series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
  });
  }

}