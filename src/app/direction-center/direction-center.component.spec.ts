import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionCenterComponent } from './direction-center.component';

describe('DirectionCenterComponent', () => {
  let component: DirectionCenterComponent;
  let fixture: ComponentFixture<DirectionCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectionCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectionCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
