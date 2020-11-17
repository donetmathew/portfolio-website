import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideOrientationComponent } from './side-orientation.component';

describe('SideOrientationComponent', () => {
  let component: SideOrientationComponent;
  let fixture: ComponentFixture<SideOrientationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideOrientationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
