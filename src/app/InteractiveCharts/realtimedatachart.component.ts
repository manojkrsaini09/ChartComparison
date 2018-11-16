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
  selector: 'realtimedatachart-high-comp',
  templateUrl: './realtimedatachart.component.html',
  styleUrls: ['./realtimedatachart.component.css'],

})
export class RealTimeChartsComponent implements OnInit {
  name = `Angular! v${VERSION.full}`;
  @ViewChild("container", { read: ElementRef }) container: ElementRef;

  defaultData = 'https://demo-live-data.highcharts.com/time-data.csv';
  fetchURL = this.defaultData;
  urlInput = this.fetchURL;
  pollingCheckbox = true;
  pollingTime;
  pollingInput = this.pollingTime;
  constructor() {
  }
  ngOnInit() {
    console.log('ngOnInit fired');
    this.createChart();
  /*if (this.pollingInput.value < 1 || !this.pollingInput.value) {
    this.pollingInput.value = 1;
  }*/

  }

  createChart() {
    Highcharts.chart(this.container.nativeElement, {
      chart: {
          type: 'spline'
      },
      title: {
          text: 'Live Data'
      },
      data: {
          csvURL: 'https://demo-live-data.highcharts.com/time-data.csv',
          enablePolling: 'true',
          dataRefreshRate: parseInt("2", 10)
      }
  });

  }

}