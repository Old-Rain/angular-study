import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ERouteComponent } from './e-route.component';

describe('ERouteComponent', () => {
  let component: ERouteComponent;
  let fixture: ComponentFixture<ERouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ERouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ERouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
