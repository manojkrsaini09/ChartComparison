import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-bar-chart',
  templateUrl: './high.barchart.component.html'
})
export class HighBarChartComponent {
  Highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'column'
  },
  colors : ['#af36b1', '#3db19f', '#75ba3b'],
  //   title: {
  //     text: 'Monthly Average Rainfall'
  // },
  // subtitle: {
  //     text: 'Source: WorldClimate.com'
  // },
  xAxis: {
      categories: [
          'Germany',
          'USA',
          'France'
      ],
      crosshair: true
  },
  yAxis: {
     // min: 0,
      title: {
          text: 'Population'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
     // shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
         // pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
      name: 'Germany',
      data: [8940000]

  }, {
      name: 'USA',
      data: [5000000]

  }, {
      name: 'France',
      data: [7200000]

  }]
  };
}
