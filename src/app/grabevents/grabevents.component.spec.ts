import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrabeventsComponent } from './grabevents.component';

describe('GrabeventsComponent', () => {
  let component: GrabeventsComponent;
  let fixture: ComponentFixture<GrabeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrabeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrabeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
