import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidreportsComponent } from './covidreports.component';

describe('CovidreportsComponent', () => {
  let component: CovidreportsComponent;
  let fixture: ComponentFixture<CovidreportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CovidreportsComponent]
    });
    fixture = TestBed.createComponent(CovidreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
