import { Component, ViewEncapsulation } from '@angular/core';
import {
  SchedulerEvent,
  EventStyleArgs
} from "@progress/kendo-angular-scheduler";
import { sampleData } from './events-utc';


@Component({
  selector: 'app-samplescheduler',  
  templateUrl: './samplescheduler.component.html',
  styleUrls: ['./samplescheduler.component.css']
})
export class SampleschedulerComponent {
  public selectedDate: Date = new Date("2023-03-27T04:00:00");
  public events: SchedulerEvent[] = sampleData;

  public get selectedKeys(): number[] {
    return Array.from(this.selectionState);
  }

  public selectionState: Set<number> = new Set();

  public isSelected = (dataItem: any): boolean => {
    return this.selectionState.has(dataItem.id);
  };  

  public onEventClick(data: any): void {    
    if (this.isSelected(data.event)) {
      this.selectionState.delete(data.event.id);
    } else {
      this.selectionState.add(data.event.id);
    }    
  }

  public getEventStyles = (args: EventStyleArgs) => {
    if(this.isSelected(args.event)){
      args.event.dataItem.color = "blueviolet";
    } else {
      args.event.dataItem.color = "#ff6358";
    }
    return { backgroundColor: args.event.dataItem.color};
  }  

  public getEventClass = (args: EventStyleArgs) => {
    if(args.event.dataItem.duration > 1){
      return "column-span-2";
    } else {
      return "";
    }
  }
}
