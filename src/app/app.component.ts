import { Component, OnInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { TaskDataService } from './task-data.service';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskDataService]
})

export class AppComponent implements OnInit, OnDestroy {
  public options: any;
  private chart: AmChart;

  constructor(
    private taskDataService: TaskDataService,
    private AmCharts: AmChartsService) { }

  tasks: Task[] = [];

  makeOptions(dataProvider) {
    return {
      "type": "gantt",
      "theme": "light",
      "marginRight": 70,
      "period": "DD",
      "dataDateFormat": "YYYY-MM-DD",
      "columnWidth": 0.5,
      "valueAxis": {
        "type": "date"
      },
      "brightnessStep": 7,
      "graph": {
        "lineAlpha": 1,
        "lineColor": "#fff",
        "fillAlphas": 0.85,
        "balloonText": "<b>[[task]]</b>:<br />[[open]] -- [[value]]"
      },
      "rotate": true,
      "categoryField": "category",
      "segmentsField": "segments",
      "colorField": "color",
      "startDateField": "start",
      "endDateField": "end",
      "valueScrollbar": {
        "autoGridCount": true
      },
      "chartCursor": {
        "cursorColor": "#55bb76",
        "valueBalloonsEnabled": false,
        "cursorAlpha": 0,
        "valueLineAlpha": 0.5,
        "valueLineBalloonEnabled": true,
        "valueLineEnabled": true,
        "zoomable": false,
        "valueZoomable": true
      },
      "dataProvider": dataProvider,
      "export": {
        "enabled": true
      }
    };
  }

  ngOnInit() {
    // Create chart
    this.taskDataService
      .getAllTasks()
      .subscribe(
        (tasks) => {
          this.tasks = tasks;
          this.chart = this.AmCharts.makeChart('chart', this.makeOptions(this.tasks));
        }
      );
  }

  ngOnDestroy() {

  }
}
