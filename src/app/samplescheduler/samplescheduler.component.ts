import { ViewChild,ElementRef,Component, ChangeDetectorRef, Renderer2, AfterViewInit } from '@angular/core';
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
export class SampleschedulerComponent implements AfterViewInit {  
  public selectedDate: Date = new Date("2023-03-27T04:00:00");
  public events: SchedulerEvent[] = sampleData;
  private trackId: number = 0;
  private groupId: number= 1;
  
  constructor(private renderer: Renderer2,private elementRef: ElementRef){}

  ngAfterViewInit() {
    const elements: HTMLElement[] = this.elementRef.nativeElement.querySelectorAll('.rowSelector');
    elements.forEach((element: HTMLElement) => {
        this.trackId += 1;        
        
        let result = `${this.groupId} - ${this.trackId}`;

        if(this.trackId == 5){
          this.groupId++;
        }

        if(this.trackId % 5 == 0){
          this.trackId = 0;
        }

        element.textContent = result;
    });
  }

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
      args.event.dataItem.color = "blue";
    } else {
      args.event.dataItem.color = "#ff6358";
    }
    return { backgroundColor: args.event.dataItem.color};
  }  

  public getEventClass = (args: EventStyleArgs) => {
    if(args.event.dataItem.duration > 1){
      return "column-span";
    } else {
      return "";
    }
  }

  public selectRow(element: any){
    this.events.forEach( (x: any) => {
      if(x.trackId == element.textContent){
        if(x.isRowSelected){
          this.selectionState.delete(x.id);
          x.isRowSelected = false;
        } else {
          this.selectionState.add(x.id);
          x.isRowSelected = true;
        }
      }
    });
  }
}
