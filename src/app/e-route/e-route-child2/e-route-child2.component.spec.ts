import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ERouteChild2Component } from './e-route-child2.component';

describe('ERouteChild2Component', () => {
  let component: ERouteChild2Component;
  let fixture: ComponentFixture<ERouteChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ERouteChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ERouteChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
