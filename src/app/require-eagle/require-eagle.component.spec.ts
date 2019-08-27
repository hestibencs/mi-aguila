import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequireEagleComponent } from './require-eagle.component';

describe('RequireEagleComponent', () => {
  let component: RequireEagleComponent;
  let fixture: ComponentFixture<RequireEagleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequireEagleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequireEagleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
