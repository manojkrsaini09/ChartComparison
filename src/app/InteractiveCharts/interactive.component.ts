declare var require: any;

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);

import Data from 'highcharts/modules/data';
Data(Highcharts);


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

export class InteractiveChartsComponent implements OnInit {
    
    ngOnInit() {
        this.createChart();
    }

  // For all demos:
  Highcharts = Highcharts;
  drillTypeSelect='Level';
  timePeriodSelect = 'YTD';
  chartTitle = '';
  chartType = 'column';
  optFromInput;

  // Demo #1
  createChart(){
    let componentScope = this;
  /*optFromInputString = `
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
            },
            "events":{
                "click": "function (event) { console.log('Hii 22');}"
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
        }],
      "events":{
        "click": "function (event) { console.log('Hii');}"
        }
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

  //optFromInput = JSON.parse(this.optFromInputString);*/
  
  this.optFromInput = 
    {
        chart: {
            type: "column",
            animation: true
        },
        title: {
            text: "Basic drilldown"
        },
        xAxis: {
            type: "category"
        },
    
        legend: {
            enabled: true
        },
    
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                },
            }
        },
        series: [{
            name: "OEE",
            colorByPoint: true,
            data: [{
                name: "Can Lines",
                y: 56,
                drilldown: "canLines"
            }, {
                name: "Bottle Lines",
                y: 67,
                drilldown: "bottleLines"
            }],
          events:{
            click: function (event) { 
                componentScope.drillDown(event.point.drilldown);
            }
            }
        }],
        drilldown: {
            series: [{
                id: "canLines1",
                data: [
                    ["Line 1", 43],
                    ["Line 2", 26]
                ]
            }, {
                id: "bottleLines1",
                data: [
                    ["Line 5", 58],
                    ["Line 6", 66]
                ]
            }]
        }
      }
; 
    }
  updateFromInput = false;
  back(level : any) {
    var newData = [{
        name: "Can Lines",
        y: 56,
        drilldown: "canLines"
    }, {
        name: "Bottle Lines",
        y: 67,
        drilldown: "bottleLines"
    }];
    this.optFromInput.series[0].data = newData;
    this.updateFromInput = true;
  }

  drillDown(level : any) {
    console.log('Chart instance: '+level);
    console.log('Drill Type : '+this.drillTypeSelect);
    console.log('CHart Type : '+this.chartType);
    console.log('Time Period Type : '+this.timePeriodSelect);
    this.optFromInput.chart.type =  this.chartType;
    if(level=='canLines'  && this.drillTypeSelect=='Level'){
        var newData =  [{
            name: "Line 1",
            y: 56,
            drilldown: "line1"
        }, {
            name: "Line 2",
            y: 67,
            drilldown: "line2"
        }];
        this.optFromInput.series[0].data = newData;
        this.updateFromInput = true;
    }else if(level=='canLines'  && this.drillTypeSelect=='KPI'){
        var newData =  [{
            name: "Availability",
            y: 45,
            drilldown: "Availability"
        }, {
            name: "Performance",
            y: 34,
            drilldown: "Performance"
        }, {
            name: "Quality",
            y: 31,
            drilldown: "Quality"
        }];
        this.optFromInput.series[0].data = newData;
        this.updateFromInput = true;
    }else if(level=='canLines'  && this.drillTypeSelect=='Time'){
        var newData =  [{
            name: "Jan",
            y: 45,
            drilldown: "Jan"
        }, {
            name: "Feb",
            y: 45,
            drilldown: "Feb"
        }, {
            name: "Mar",
            y: 31,
            drilldown: "Mar"
        },
        {
            name: "Apr",
            y: 31,
            drilldown: "Apr"
        },
        {
            name: "May",
            y: 31,
            drilldown: "May"
        },
        {
            name: "Jun",
            y: 31,
            drilldown: "Jun"
        },
        {
            name: "Jul",
            y: 31,
            drilldown: "Jul"
        },
        {
            name: "Aug",
            y: 31,
            drilldown: "Aug"
        },
        {
            name: "Sep",
            y: 31,
            drilldown: "Sep"
        },
        {
            name: "Oct",
            y: 31,
            drilldown: "Oct"
        },
        {
            name: "Nov",
            y: 31,
            drilldown: "Nov"
        },
        {
            name: "Dec",
            y: 31,
            drilldown: "Dec"
        }
    ];
        this.optFromInput.series[0].data = newData;
        this.updateFromInput = true;
    }


  }
  // Demonstrate chart instance
  logChartInstance(chart: any) {
    console.log('Chart instance: ', chart);
  }

  updateInputChart() {
    //this.optFromInput = JSON.parse(this.optFromInputString);
  }
  updateTitle() {
    this.optFromInput.title.text =  this.chartType;
    this.updateFromInput = true;
  }
  updateType() {
      console.log(this.chartType);
    this.optFromInput.chart.type =  this.chartType;
    this.optFromInput.series[0].type = this.chartType;
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
    //this.optFromInput.series[index].type = this.seriesTypes[this.optFromInput.series[index].type];
    // nested change - must trigger update
    this.updateFromInput = true;
  }

 
}
