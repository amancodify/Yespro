import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoheaderComponent } from './videoheader.component';

describe('VideoheaderComponent', () => {
  let component: VideoheaderComponent;
  let fixture: ComponentFixture<VideoheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
