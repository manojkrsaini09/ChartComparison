import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { HighchartsChartModule } from 'highcharts-angular';
// import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';



import { AppComponent } from './app.component';
import { NgxBarChartComponent } from './NgxBarChart/ngx.barchart.component';
import { NGXChartsComponent } from './NgxCharts/ngx.charts.component';
import { NgxHorizontalBarChartComponent } from './NgxHorizontalBarChart/ngx.barchart.horizontal.component';
import { NgxGaugeComponent } from './NgxGaugeChart/ngx-gauge.component';
import { NgxStackedVerticalChartComponent } from './NgxStackedVerticalBarChart/ngx-stacked-vertical.component';
import { AmChartsComponent } from './AmCharts/am.charts.component';
import { AmcBarChartComponent } from './AmBarChart/amc.barchart.component';
import { AmcHorizontalBarChartComponent } from './AmHorizontalBarChart/amc.horizontal-barchart.component';
import { AmcGaugeChartComponent } from './AmGaugeChart/amc.gauge.component';
import { AmcStackedChartComponent } from './AmStackedChart/amc.stacked-chart.component';
import { VerticalBarChartsComponent } from './VerticalBarCharts/verrtical-bar-charts.component';
import { HorizontalBarChartsComponent } from './HorizontalBarCharts/horizontal-bar-charts.component';
import { GaugeChartsComponent } from './AllGaugeCharts/gauge-charts.component';
import { StackedChartsComponent } from './AllStackedCharts/stacked-charts.component';
import { HighBarChartComponent } from './HighBarChart/high.barchart.component';
import { HighStackedChartComponent } from './HighStackedChart/high.stackedchart.component';
import { HighGaugeChartComponent } from './HighGaugeChart/high.gaugechart.component';
import { HighChartsComponent } from './HighCharts/high.charts.component';
import { HighHorizontalBarChartComponent } from './HighHorizontalBarChart/high.horizontalbarchart.component';


const appRoutes: Routes = [
  {path: 'ngxchart' , component : NGXChartsComponent},
  {path: 'highchart' , component : HighChartsComponent},
  {path: 'stackedCharts' , component : StackedChartsComponent},
  {path: 'verticalBarCharts' , component : VerticalBarChartsComponent},
  {path: 'horizontalBarCharts' , component : HorizontalBarChartsComponent},
  {path: 'gaugeCharts' , component : GaugeChartsComponent},
  {path: 'stackedCharts' , component : StackedChartsComponent},
  {path: 'amchart' , component : AmChartsComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    NgxBarChartComponent,
    NGXChartsComponent,
    NgxHorizontalBarChartComponent,
    NgxGaugeComponent,
    NgxStackedVerticalChartComponent,
    AmcBarChartComponent,
    AmChartsComponent,
    AmcHorizontalBarChartComponent,
    AmcGaugeChartComponent,
    AmcStackedChartComponent,
    VerticalBarChartsComponent,
    HorizontalBarChartsComponent,
    GaugeChartsComponent,
    StackedChartsComponent,
    HighBarChartComponent,
    HighStackedChartComponent,
    HighGaugeChartComponent,
    HighChartsComponent,
    HighHorizontalBarChartComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgxChartsModule,
    AmChartsModule,
    HighchartsChartModule
  ],
  // providers: [
  //     { provide: HighchartsChartModule, useFactory: () => [ more, exporting ] } // add as factory to your providers
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
