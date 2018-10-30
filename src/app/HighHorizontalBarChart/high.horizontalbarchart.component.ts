import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-horizontal-bar-chart',
  templateUrl: './high.horzontalbarchart.component.html'
})
export class HighHorizontalBarChartComponent {
  Highcharts = Highcharts;
  chartOptions = {
    chart: {
        type: 'bar'
    },
    colors : ['#af36b1', '#3db19f', '#75ba3b'],
    // title: {
    //     text: 'Historic World Population by Region'
    // },
    // subtitle: {
    //     text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
    // },
    xAxis: {
        categories: ['Order Information', 'Predicted Outcome', 'Basecase Outcome'],
        title: {
            text: 'Order Time'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Time',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    // tooltip: {
    //     valueSuffix: ' millions'
    // },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Order Information',
        data: [16.8]
    }, {
        name: 'Predicted Outcome',
        data: [17.5]
    }, {
        name: 'Basecase Outcome',
        data: [14.8]
    }]
  };
}
