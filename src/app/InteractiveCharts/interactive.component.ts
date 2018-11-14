declare var require: any;

import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);


/*const HC_map = require('highcharts/modules/map');
const HC_exporting = require('highcharts/modules/exporting');
const HC_ce = require('highcharts-custom-events');*/

//HC_map(Highcharts);
//require('../../js/worldmap')(Highcharts);

/*HC_exporting(Highcharts);
HC_ce(Highcharts);*/

Highcharts.setOptions({
  title: {
    style: {
      color: 'orange'
    }
  },
  lang: {
    drillUpText: '◁ Back '
  } 
});
Highcharts.setOptions({
  lang: {
      drillUpText: '◁ Back'
  }
});

@Component({
  selector: 'hierarchy_chart',
  templateUrl: './interactive.component.html'
})

export class InteractiveChartsComponent {
  // For all demos:
  Highcharts = Highcharts;
  timePeriodSelect = '';
  chartTitle = '';
  chartType = '';

  // Demo #1
  optFromInputString = `
  {
    "chart": {
        "type": "column"
    },
    "title": {
        "text": "Basic drilldown"
    },
    "xAxis": {
        "type": "category"
    },

    "legend": {
        "enabled": "true"
    },

    "plotOptions": {
        "series": {
            "borderWidth": "0",
            "dataLabels": {
                "enabled": "true"
            }
        }
    },

    "series": [{
        "name": "OEE",
        "colorByPoint": true,
        "data": [{
            "name": "Can Lines",
            "y": 56,
            "drilldown": "canLines"
        }, {
            "name": "Bottle Lines",
            "y": 67,
            "drilldown": "bottleLines"
        }]
    }],
    "drilldown": {
        "series": [{
            "id": "canLines1",
            "data": [
                ["Line 1", 43],
                ["Line 2", 26]
            ]
        }, {
            "id": "bottleLines1",
            "data": [
                ["Line 5", 58],
                ["Line 6", 66]
            ]
        }]
    }
  }
 `;

  optFromInput = JSON.parse(this.optFromInputString);
 
  updateFromInput = false;

  // Demonstrate chart instance
  logChartInstance(chart: any) {
    console.log('Chart instance: ', chart);
  }

  updateInputChart() {
    this.optFromInput = JSON.parse(this.optFromInputString);
  }
  updateTitle() {
    this.optFromInput.title.text =  this.chartType;
    this.updateFromInput = true;
  }
  updateType() {
      console.log(this.chartType);
    this.optFromInput.chart.type =  this.chartType;
    console.log(this.chartType);
    this.updateFromInput = true;
  }
  
  timePeriodChangeMethod() {
    //this.optFromInput.series[0].type = 'scatter';
    var t = `
        [{
        "name": "OEE",
        "colorByPoint": true,
        "data": [{
            "name": "Can Lines",
            "y": 88,
            "drilldown": "canLines"
        }, {
            "name": "Bottle Lines",
            "y": 92,
            "drilldown": "bottleLines"
        }]
    }]
    `;
    var j = JSON.parse(t);
    this.optFromInput.series = j;
    console.log(this.timePeriodSelect);
    this.updateFromInput = true;
  }

  drillTypeChangeMethod() {
    //this.optFromInput.series[0].type = 'scatter';
    var t = `
        [{
        "name": "OEE",
        "colorByPoint": true,
        "data": [{
            "name": "Can Lines",
            "y": 88,
            "drilldown": "canLines"
        }, {
            "name": "Bottle Lines",
            "y": 92,
            "drilldown": "bottleLines"
        }]
    }]
    `;
    var j = JSON.parse(t);
    this.optFromInput.series = j;
    console.log(this.timePeriodSelect);
    this.updateFromInput = true;
  }

  seriesTypes: {[key: string]: string} = {
    line: 'column',
    column: 'scatter',
    scatter: 'spline',
    spline: 'line'
  };

  toggleSeriesType(index = 0) {
    this.optFromInput.series[index].type = this.seriesTypes[this.optFromInput.series[index].type];
    // nested change - must trigger update
    this.updateFromInput = true;
  }

 
}
