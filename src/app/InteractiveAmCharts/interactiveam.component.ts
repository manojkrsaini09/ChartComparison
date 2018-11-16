import { Component, AfterViewInit, OnDestroy,NgZone } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';


@Component({
  selector: 'interactive-am-chart',
  templateUrl: './interactiveam.component.html'
})
export class InteractiveAmChartsComponent implements AfterViewInit, OnDestroy {
  constructor(private AmCharts: AmChartsService, private ngZone: NgZone) {}
  private chart: AmChart;
  chartType = "column";
  chartTitle="Basic Drilldown";
  chartDrillDown:boolean = false;
  drillType:string="Level";
  timePeriod:string="YTD";
  intervalId;
  showRealTimeData:boolean=false;
  index:number=0;

  chartData:Array<object>=[
    {
      'name': 'Can Lines',
      'value': 56
    },
    {
      'name': 'Bottle Lines',
      'value': 67
    }
  ];

  canLinesData:Array<object>=[
    {
      'name': 'Line 1',
      'value': 43
    },
    {
      'name': 'Line 2',
      'value': 26
    }
  ];

  bottleLinesData:Array<object>=[
    {
      'name': 'Line 5',
      'value': 58
    },
    {
      'name': 'Line 6',
      'value': 66
    }
  ];

  canKpiData:Array<object>=[
      {
        'name': 'Availability',
        'value': 40
      },
      {
        'name': 'Quality',
        'value': 35
      },
      {
        'name': 'Performance',
        'value': 25
      }
  ]

  bottleKpiData:Array<object>=[
    {
      'name': 'Availability',
      'value': 20
    },
    {
      'name': 'Quality',
      'value': 35
    },
    {
      'name': 'Performance',
      'value': 45
    }
  ]

  canYtdData:Array<object>=[
    {
      'name': 'Jan',
      'value': 40
    },
    {
      'name': 'Feb',
      'value': 0
    },
    {
      'name': 'Mar',
      'value': 55
    },
    {
        'name': 'Apr',
        'value': 65
      },
      {
        'name': 'May',
        'value': 20
      },
      {
        'name': 'Jun',
        'value': 0
      },
      {
        'name': 'July',
        'value': 0
      },
      {
        'name': 'Aug',
        'value': 85
      },
      {
        'name': 'Sep',
        'value': 42
      },
      {
        'name': 'Oct',
        'value': 0
      },
      {
        'name': 'Nov',
        'value': 56
      },
      {
        'name': 'Dec',
        'value': 0
      }
  ]

  bottleYtdData:Array<object>=[
    {
      'name': 'Jan',
      'value': 85
    },
    {
      'name': 'Feb',
      'value': 0
    },
    {
      'name': 'Mar',
      'value': 65
    },
    {
        'name': 'Apr',
        'value': 0
      },
      {
        'name': 'May',
        'value': 24
      },
      {
        'name': 'Jun',
        'value': 36
      },
      {
        'name': 'July',
        'value': 54
      },
      {
        'name': 'Aug',
        'value': 0
      },
      {
        'name': 'Sep',
        'value': 0
      },
      {
        'name': 'Oct',
        'value': 59
      },
      {
        'name': 'Nov',
        'value': 74
      },
      {
        'name': 'Dec',
        'value': 0
      }
  ]

  realTimeData:Array<Array<object >> = [
    [
        {
          'name': 'Jan',
          'value': 85
        },
        {
          'name': 'Feb',
          'value': 0
        },
        {
          'name': 'Mar',
          'value': 65
        },
        {
            'name': 'Apr',
            'value': 0
          },
          {
            'name': 'May',
            'value': 24
          },
          {
            'name': 'Jun',
            'value': 36
          },
          {
            'name': 'July',
            'value': 54
          },
          {
            'name': 'Aug',
            'value': 0
          },
          {
            'name': 'Sep',
            'value': 0
          },
          {
            'name': 'Oct',
            'value': 59
          },
          {
            'name': 'Nov',
            'value': 74
          },
          {
            'name': 'Dec',
            'value': 0
          }
      ],
      [
        {
          'name': 'Jan',
          'value': 0
        },
        {
          'name': 'Feb',
          'value': 48
        },
        {
          'name': 'Mar',
          'value': 25
        },
        {
            'name': 'Apr',
            'value': 15
          },
          {
            'name': 'May',
            'value': 0
          },
          {
            'name': 'Jun',
            'value': 0
          },
          {
            'name': 'July',
            'value': 65
          },
          {
            'name': 'Aug',
            'value': 83
          },
          {
            'name': 'Sep',
            'value': 0
          },
          {
            'name': 'Oct',
            'value': 0
          },
          {
            'name': 'Nov',
            'value': 41
          },
          {
            'name': 'Dec',
            'value': 75
          }
      ],
      [
        {
          'name': 'Jan',
          'value': 46
        },
        {
          'name': 'Feb',
          'value': 25
        },
        {
          'name': 'Mar',
          'value': 0
        },
        {
            'name': 'Apr',
            'value': 11
          },
          {
            'name': 'May',
            'value': 0
          },
          {
            'name': 'Jun',
            'value': 96
          },
          {
            'name': 'July',
            'value': 45
          },
          {
            'name': 'Aug',
            'value': 0
          },
          {
            'name': 'Sep',
            'value': 45
          },
          {
            'name': 'Oct',
            'value': 19
          },
          {
            'name': 'Nov',
            'value': 0
          },
          {
            'name': 'Dec',
            'value': 76
          }
      ],
      [
        {
          'name': 'Jan',
          'value': 35
        },
        {
          'name': 'Feb',
          'value': 26
        },
        {
          'name': 'Mar',
          'value': 0
        },
        {
            'name': 'Apr',
            'value': 0
          },
          {
            'name': 'May',
            'value': 45
          },
          {
            'name': 'Jun',
            'value': 68
          },
          {
            'name': 'July',
            'value': 0
          },
          {
            'name': 'Aug',
            'value': 26
          },
          {
            'name': 'Sep',
            'value': 95
          },
          {
            'name': 'Oct',
            'value': 38
          },
          {
            'name': 'Nov',
            'value': 59
          },
          {
            'name': 'Dec',
            'value': 0
          }
      ],
      [
        {
          'name': 'Jan',
          'value': 82
        },
        {
          'name': 'Feb',
          'value': 54
        },
        {
          'name': 'Mar',
          'value': 0
        },
        {
            'name': 'Apr',
            'value': 0
          },
          {
            'name': 'May',
            'value': 75
          },
          {
            'name': 'Jun',
            'value': 69
          },
          {
            'name': 'July',
            'value': 0
          },
          {
            'name': 'Aug',
            'value': 0
          },
          {
            'name': 'Sep',
            'value': 84
          },
          {
            'name': 'Oct',
            'value': 35
          },
          {
            'name': 'Nov',
            'value': 0
          },
          {
            'name': 'Dec',
            'value': 46
          }
      ]
  ]

  playRealTimeData(){
        clearInterval(this.intervalId);
        this.intervalId = setInterval(() => {
            this.chart.dataProvider = this.realTimeData[this.index];
            this.chart.validateData();

            this.index ++;
            if(this.index > 4){
                this.index = 0;
            }
        
            this.chartDrillDown = false;
        },1000);
        this.showRealTimeData = true;
  }

  stopRealTimeData(){
    clearInterval(this.intervalId);
    this.showRealTimeData = false;
    this.backToMainChart();
  }

  toggleChartDrillDown(showBack:boolean){
      this.ngZone.run(()=>{this.chartDrillDown = showBack;});
  }

  ngAfterViewInit() {
    this.createChart(this.chartType);
  }

  updateTitle() {
    this.chart.titles[0].text = this.chartTitle;
    this.chart.validateData();
    this.chart.animateAgain();
  }

  backToMainChart() {
    this.chart.dataProvider = this.chartData;
    this.chart.validateData();

    this.chartDrillDown = false;
  }

  updateType() {
    this.createChart(this.chartType);
  }

  createChart(type:string){
    this.toggleChartDrillDown(false);
    let that = this;
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
            'listeners': [{
                event: 'clickGraphItem',
                method: function(event) {
                    if(that.drillType == "Level")
                    {                
                        if(event.item.dataContext.name == "Can Lines"){
                            event.chart.dataProvider = that.canLinesData;
                        }
                        else if(event.item.dataContext.name == "Bottle Lines"){
                            event.chart.dataProvider = that.bottleLinesData;
                        }
                        that.toggleChartDrillDown(true);
                    }
                    else if(that.drillType == "KPI")
                    {                
                        if(event.item.dataContext.name == "Can Lines"){
                            event.chart.dataProvider = that.canKpiData;
                        }
                        else if(event.item.dataContext.name == "Bottle Lines"){
                            event.chart.dataProvider = that.bottleKpiData;
                        }
                        that.toggleChartDrillDown(true);
                    }
                    else if(that.drillType == "Time")
                    {                
                        if(event.item.dataContext.name == "Can Lines"){
                            event.chart.dataProvider = that.canYtdData;
                        }
                        else if(event.item.dataContext.name == "Bottle Lines"){
                            event.chart.dataProvider = that.bottleYtdData;
                        }
                        that.toggleChartDrillDown(true);
                    }
                    
                    event.chart.validateData();
                }
            }],
            'categoryField': 'name',
             'rotate': false,
          'valueAxis': [{
            'axisAlpha': 0,
            'position': 'left',
            'title': 'Population'
          }],
          "export": {
            "enabled": true
            }
        });
      }
      else if(type == "line"){
        this.chart = this.AmCharts.makeChart('chartdiv', {
            'type': 'serial',
            'theme': 'light',
            "titles": [{
                "text": this.chartTitle
            }],
            'dataProvider': this.chartData,
            'graphs': [{
                "id": "graph2",
                "balloonText": "<span style='font-size:12px;'>[[category]]:<br><span style='font-size:20px;'>[[value]]</span></span>",
                "bullet": "round",
                "lineThickness": 3,
                "bulletSize": 7,
                "bulletBorderAlpha": 1,
                "bulletColor": "#FFFFFF",
                "useLineColorForBulletBorder": true,
                "bulletBorderThickness": 3,
                "fillAlphas": 0,
                "lineAlpha": 1,
                "valueField": "value",
                "dashLengthField": "dashLengthLine"
              }], 
              'listeners': [{
                event: 'clickGraphItem',
                method: function(event) {
                    if(that.drillType == "Level")
                    {                
                        if(event.item.dataContext.name == "Can Lines"){
                            event.chart.dataProvider = that.canLinesData;
                        }
                        else if(event.item.dataContext.name == "Bottle Lines"){
                            event.chart.dataProvider = that.bottleLinesData;
                        }
                        that.toggleChartDrillDown(true);
                    }
                    else if(that.drillType == "KPI")
                    {                
                        if(event.item.dataContext.name == "Can Lines"){
                            event.chart.dataProvider = that.canKpiData;
                        }
                        else if(event.item.dataContext.name == "Bottle Lines"){
                            event.chart.dataProvider = that.bottleKpiData;
                        }
                        that.toggleChartDrillDown(true);
                    }
                    else if(that.drillType == "Time")
                    {                
                        if(event.item.dataContext.name == "Can Lines"){
                            event.chart.dataProvider = that.canYtdData;
                        }
                        else if(event.item.dataContext.name == "Bottle Lines"){
                            event.chart.dataProvider = that.bottleYtdData;
                        }
                        that.toggleChartDrillDown(true);
                    }
                    
                    event.chart.validateData();
                }
            }],           
            'categoryField': 'name',
             'rotate': false,
          'valueAxis': [{
            'axisAlpha': 0,
            'position': 'left',
            'title': 'Population'
          }],
          "export": {
            "enabled": true
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
            'listeners': [{
                event: 'clickSlice',
                method: function(event) { 
                    if(that.drillType == "Level")
                    {           
                        if(event.dataItem.dataContext.name == "Can Lines"){                        
                            event.chart.dataProvider = that.canLinesData;                        
                        }
                        else if(event.dataItem.dataContext.name == "Bottle Lines"){                       
                            event.chart.dataProvider = that.bottleLinesData;                        
                        }
                        that.toggleChartDrillDown(true);
                    }
                    else if(that.drillType == "KPI")
                    {           
                        if(event.dataItem.dataContext.name == "Can Lines"){                        
                            event.chart.dataProvider = that.canKpiData;                        
                        }
                        else if(event.dataItem.dataContext.name == "Bottle Lines"){                       
                            event.chart.dataProvider = that.bottleKpiData;                        
                        }
                        that.toggleChartDrillDown(true);
                    }
                    else if(that.drillType == "Time")
                    {           
                        if(event.dataItem.dataContext.name == "Can Lines"){                        
                            event.chart.dataProvider = that.canYtdData;                        
                        }
                        else if(event.dataItem.dataContext.name == "Bottle Lines"){                       
                            event.chart.dataProvider = that.bottleYtdData;                        
                        }
                        that.toggleChartDrillDown(true);
                    }
                    event.chart.validateData();
                }
            }],
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

  resetChart(){
    console.log('rest chart function');
  }

}

