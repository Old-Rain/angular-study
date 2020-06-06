import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ERouteNotFoundComponent } from './e-route-not-found.component';

describe('ERouteNotFoundComponent', () => {
  let component: ERouteNotFoundComponent;
  let fixture: ComponentFixture<ERouteNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ERouteNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ERouteNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
