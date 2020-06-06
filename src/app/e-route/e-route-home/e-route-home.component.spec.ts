import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ERouteHomeComponent } from './e-route-home.component';

describe('ERouteHomeComponent', () => {
  let component: ERouteHomeComponent;
  let fixture: ComponentFixture<ERouteHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ERouteHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ERouteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
