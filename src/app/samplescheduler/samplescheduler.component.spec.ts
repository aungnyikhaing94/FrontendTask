import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleschedulerComponent } from './samplescheduler.component';

describe('SampleschedulerComponent', () => {
  let component: SampleschedulerComponent;
  let fixture: ComponentFixture<SampleschedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleschedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleschedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
