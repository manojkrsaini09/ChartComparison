import { Component, AfterViewInit, OnDestroy,NgZone } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';


@Component({
  selector: 'realtime-am-chart',
  templateUrl: './interactiveam.realtime.component.html'
})
export class RealTimeAMChartsComponent implements AfterViewInit, OnDestroy {
  constructor(private AmCharts: AmChartsService, private ngZone: NgZone) {}
  private chart: AmChart;
  
  ngAfterViewInit() {
    this.createChart();
  }

  createChart(){
    
        this.chart = this.AmCharts.makeChart('chartdiv1', {
          "type": "serial",
          "categoryField": "year",
          "startDuration": 1,
          "handDrawScatter": 4,
          "handDrawThickness": 2,
          "dataLoader": {
            "enabled": true,
            "url": "https://dev.sageclarity.com/ChartData/dataProvider.json",
            "format": "json"
          },
          "categoryAxis": {},
          "trendLines": [],
          "graphs": [
            {
              "alphaField": "ye",
              "balloonText": "[[title]] of [[category]]:[[value]]",
              "bulletField": "ye",
              "bulletSizeField": "ye",
              "closeField": "ye",
              "colorField": "ye",
              "customBulletField": "ye",
              "dashLengthField": "ye",
              "descriptionField": "ye",
              "errorField": "ye",
              "fillAlphas": 0.7,
              "fillColorsField": "ye",
              "gapField": "ye",
              "highField": "ye",
              "id": "AmGraph-1",
              "labelColorField": "ye",
              "lineAlpha": 0,
              "lineColorField": "ye",
              "lowField": "ye",
              "openField": "ye",
              "patternField": "ye",
              "title": "Cars",
              "valueField": "cars",
              "xField": "ye",
              "yField": "ye"
            },
            {
              "alphaField": "ye",
              "balloonText": "[[title]] of [[category]]:[[value]]",
              "bulletField": "ye",
              "bulletSizeField": "ye",
              "closeField": "ye",
              "colorField": "ye",
              "customBulletField": "ye",
              "dashLengthField": "ye",
              "descriptionField": "ye",
              "errorField": "ye",
              "fillAlphas": 0.7,
              "fillColorsField": "ye",
              "gapField": "ye",
              "highField": "ye",
              "id": "AmGraph-2",
              "labelColorField": "ye",
              "lineAlpha": 0,
              "lineColorField": "ye",
              "lowField": "ye",
              "openField": "ye",
              "patternField": "ye",
              "title": "Motorcycles",
              "valueField": "motorcycles",
              "xField": "ye",
              "yField": "ye"
            },
            {
              "alphaField": "ye",
              "bulletField": "ye",
              "bulletSizeField": "ye",
              "closeField": "ye",
              "colorField": "ye",
              "customBulletField": "ye",
              "dashLengthField": "ye",
              "descriptionField": "ye",
              "errorField": "ye",
              "fillAlphas": 0.48,
              "fillColorsField": "ye",
              "gapField": "ye",
              "highField": "ye",
              "id": "AmGraph-3",
              "labelColorField": "ye",
              "lineColorField": "ye",
              "lowField": "ye",
              "openField": "ye",
              "patternField": "ye",
              "title": "Bicycles",
              "valueField": "bicycles",
              "xField": "ye",
              "yField": "ye"
            }
          ],
          "guides": [],
          "valueAxes": [
            {
              "id": "ValueAxis-1",
              "stackType": "regular",
              "title": "Axis title"
            }
          ],
          "allLabels": [],
          "balloon": {},
          "legend": {
            "enabled": true
          },
          "titles": [
            {
              "id": "Title-1",
              "size": 15,
              "text": "Chart Title"
            }
          ],
          "dataProvider": []
        });
      
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

