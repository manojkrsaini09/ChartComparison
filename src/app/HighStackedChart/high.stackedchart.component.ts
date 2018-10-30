import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-stacked-chart',
  templateUrl: './high.stackedchart.component.html'
})
export class HighStackedChartComponent {
  Highcharts = Highcharts;
  chartOptions = {
    chart: {
        type: 'column'
    },
    colors: [ '#75ba3b', '#3db19f', '#af36b1'],
    // title: {
    //     text: 'Stacked column chart'
    // },
    xAxis: {
        categories: ['Germany', 'United States', 'France']
    },
    yAxis: {
       // min: 0,
        title: {
            text: 'GDP Per Capita'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black'
            }
        }
    },
    series: [{
        name: '1990',
        data: [31476, 37060, 29476]
    }, {
        name: '2000',
        data: [36953, 45986, 34774]
    }, {
         name: '2010',
        data: [40632, 49737, 36745]
    }]
  };
}
