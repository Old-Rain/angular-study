import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ERouteChild1Component } from './e-route-child1.component';

describe('ERouteChild1Component', () => {
  let component: ERouteChild1Component;
  let fixture: ComponentFixture<ERouteChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ERouteChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ERouteChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
