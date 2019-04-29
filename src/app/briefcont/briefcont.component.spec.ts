import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefcontComponent } from './briefcont.component';

describe('BriefcontComponent', () => {
  let component: BriefcontComponent;
  let fixture: ComponentFixture<BriefcontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriefcontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefcontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
