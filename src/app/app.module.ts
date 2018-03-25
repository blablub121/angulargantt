import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { TaskDataService } from './task-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmChartsModule,
    HttpModule
  ],
  providers: [TaskDataService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
