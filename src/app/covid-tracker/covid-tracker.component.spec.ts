import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTrackerComponent } from './covid-tracker.component';

describe('CovidTrackerComponent', () => {
  let component: CovidTrackerComponent;
  let fixture: ComponentFixture<CovidTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
