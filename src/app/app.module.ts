import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { AmChartsModule } from '@amcharts/amcharts3-angular';

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


const appRoutes: Routes = [
  {path: 'ngxchart' , component : NGXChartsComponent},
  {path: 'amchart' , component : AmChartsComponent},
  {path: 'verticalBarCharts' , component : VerticalBarChartsComponent},
  {path: 'horizontalBarCharts' , component : HorizontalBarChartsComponent},
  {path: 'gaugeCharts' , component : GaugeChartsComponent},
  {path: 'stackedCharts' , component : StackedChartsComponent},
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
    StackedChartsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgxChartsModule,
    AmChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
