import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleschedulerComponent } from './samplescheduler/samplescheduler.component';



@NgModule({
  declarations: [
    AppComponent,
    SampleschedulerComponent
  ],
  imports: [
    BrowserModule,
    SchedulerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
