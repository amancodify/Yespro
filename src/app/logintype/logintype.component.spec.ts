import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintypeComponent } from './logintype.component';

describe('LogintypeComponent', () => {
  let component: LogintypeComponent;
  let fixture: ComponentFixture<LogintypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogintypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogintypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
